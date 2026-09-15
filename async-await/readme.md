# Async/Await, Promises, Try/Catch e Throw em JavaScript

Resumo prático sobre como JavaScript lida com operações assíncronas.

## Índice

1. [O problema que isso resolve](#1-o-problema-que-isso-resolve)
2. [Promise: os três estados](#2-promise-os-três-estados)
3. [async/await: açúcar sintático](#3-asyncawait-açúcar-sintático)
4. [throw e try/catch](#4-throw-e-trycatch)
5. [Paralelismo: Promise.all vs sequencial](#5-paralelismo-promiseall-vs-sequencial)
6. [Erros comuns (checklist)](#6-erros-comuns-checklist)

---

## 1. O problema que isso resolve

JavaScript é **single-threaded** — não pode travar a única thread esperando rede, disco ou timers. Operações demoradas são assíncronas: você dispara e recebe o resultado depois, sem bloquear o resto do código.

Antes de `Promise`, isso era resolvido com callbacks aninhados ("callback hell"). `Promise` — e depois `async/await` por cima dela — resolveu isso estruturalmente.

## 2. Promise: os três estados

Uma `Promise` representa um valor que **ainda não existe, mas vai existir** (ou vai falhar).

```js
const promessa = new Promise((resolve, reject) => {
  const ok = Math.random() > 0.5;
  setTimeout(() => {
    if (ok) resolve("deu certo");
    else reject(new Error("deu errado"));
  }, 1000);
});
```

- **`pending`** — estado inicial.
- **`fulfilled`** — depois de chamar `resolve(valor)`.
- **`rejected`** — depois de chamar `reject(erro)`.

Uma vez resolvida ou rejeitada, é **imutável**: chamar `resolve`/`reject` de novo não faz nada.

Consumindo:

```js
promessa
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro))
  .finally(() => console.log("sempre roda"));
```

⚠️ **Cuidado:** o executor (`(resolve, reject) => {...}`) roda **de forma síncrona e imediata** assim que a Promise é criada. A assincronia vem do que está dentro dele (ex: `setTimeout`, `fetch`).

## 3. async/await:

```js
async function buscarDados() {
  const resposta = await fetch("https://api.exemplo.com/dados");
  const json = await resposta.json();
  return json;
}
```

- Uma `async function` **sempre retorna uma Promise**, mesmo que você não perceba.
- `await` pausa a execução **daquela função** (não do programa inteiro) até a Promise resolver.
- `await` dentro de `forEach` **não funciona** — use `for...of` ou `Promise.all`.

## 4. throw e try/catch

```js
async function buscarUsuario(id) {
  try {
    const resp = await fetch(`/usuarios/${id}`);
    if (!resp.ok) throw new Error(`Erro HTTP: ${resp.status}`);
    return await resp.json();
  } catch (erro) {
    console.error("Falhou:", erro.message);
    throw erro; // repassa se quem chamou precisa saber
  }
}
```

Pontos críticos:

- **`fetch` não rejeita em erro HTTP** (404, 500) — só rejeita se a rede falhar de verdade. Sempre checar `resp.ok` manualmente.
- `throw` dentro de uma `async function` **rejeita a Promise retornada**, não lança exceção síncrona. Só é capturável por `try/catch` se a chamada tiver `await`.
- Chamar uma função async sem `await` e sem `.catch` → erro vira **unhandled promise rejection**.
- `await` precisa estar **dentro** do bloco `try` para o `catch` funcionar.

## 5. Paralelismo: Promise.all vs sequencial

```js
// ERRADO: sequencial, 3x mais lento (se as tarefas são independentes)
const a = await tarefa1();
const b = await tarefa2();
const c = await tarefa3();

// CERTO: paralelo
const [a, b, c] = await Promise.all([tarefa1(), tarefa2(), tarefa3()]);
```

Exemplo comparativo com medição real (`console.time`):

```js
function tarefa1() {
  return new Promise(resolve => setTimeout(() => resolve("resultado 1"), 1000));
}
function tarefa2() {
  return new Promise(resolve => setTimeout(() => resolve("resultado 2"), 1000));
}
function tarefa3() {
  return new Promise(resolve => setTimeout(() => resolve("resultado 3"), 1000));
}

async function rodarSequencial() {
  console.time("sequencial");
  const a = await tarefa1();
  const b = await tarefa2();
  const c = await tarefa3();
  console.timeEnd("sequencial"); // ~3000ms
}

async function rodarParalelo() {
  console.time("paralelo");
  const [a, b, c] = await Promise.all([tarefa1(), tarefa2(), tarefa3()]);
  console.timeEnd("paralelo"); // ~1000ms
}

rodarSequencial().then(rodarParalelo);
```

**Regra:** `Promise.all` só vale a pena quando as tarefas são **independentes**. Se `tarefa2` depende do resultado de `tarefa1`, sequencial é obrigatório — não existe como paralelizar uma dependência real.

`Promise.all` rejeita **inteiro** se qualquer uma das promises falhar. Se você precisa dos resultados de todas independente de falha individual, use `Promise.allSettled`.

## 6. Erros comuns (checklist)

- [ ] Ignorar `resp.ok` ao usar `fetch` (erro HTTP passa como "sucesso")
- [ ] Usar `await` dentro de `forEach`
- [ ] Colocar `await` fora do bloco `try`
- [ ] Chamar função `async` sem `await` nem `.catch`
- [ ] Encadear `await` sequencialmente para tarefas independentes
- [ ] Usar `Promise.all` quando o requisito é "todas as respostas, mesmo com falhas" (usar `allSettled`)
- [ ] Fazer `reject("string")` em vez de `reject(new Error("mensagem"))`

---

*Gerado a partir de uma sessão de estudo sobre programação assíncrona em JavaScript.*