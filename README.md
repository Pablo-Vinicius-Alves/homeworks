# Homeworks on my journey to professional 🚀

## Aprendendo Desestruturação em JavaScript
 
 Estudos sobre **destructuring assignment** (desestruturação) em JavaScript — um recurso da linguagem que permite extrair valores de arrays e propriedades de objetos e atribuí-los a variáveis de forma mais direta e legível.
 
## Objetivo❗
 
Praticar e documentar, com exemplos próprios, os principais usos da desestruturação:
 
- Desestruturação de arrays
- Desestruturação de objetos
- Valores padrão (default values)
- Troca de variáveis (swap) sem variável auxiliar
- Renomeação de variáveis ao desestruturar objetos
- Desestruturação aninhada (objetos e arrays dentro de objetos)
- Rest pattern (`...resto`) em arrays e objetos
- Desestruturação em parâmetros de função
- Desestruturação em loops (`for...of`, `for...in`)
 
## Exemplos✅
 
### Array
 
```js
const cores = ["vermelho", "verde", "azul"];
const [primeira, segunda] = cores;
 
console.log(primeira); // "vermelho"
console.log(segunda);  // "verde"
```
 
### Objeto
 
```js
const usuario = { nome: "Ana", idade: 22 };
const { nome, idade } = usuario;
 
console.log(nome);  // "Ana"
console.log(idade); // 22
```
 
### Valor padrão
 
```js
const { nome, cidade = "Não informada" } = { nome: "Ana" };
 
console.log(cidade); // "Não informada"
```
 
### Rest pattern
 
```js
const numeros = [1, 2, 3, 4, 5];
const [primeiro, ...resto] = numeros;
 
console.log(primeiro); // 1
console.log(resto);    // [2, 3, 4, 5]
```
 
### Em parâmetros de função
 
```js
function exibirUsuario({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos.`);
}
 
exibirUsuario({ nome: "Ana", idade: 22 });
```
 
## Como rodar os exemplos
 
Cada arquivo pode ser executado individualmente com o Node.js:
 
```bash
node nome-do-arquivo.js
```
 
---

## Aprendendo Módulos em JavaScript📂
 
 Estudos sobre **módulos (modules)** em JavaScript — o sistema que permite dividir o código em arquivos separados, cada um com seu próprio escopo, e compartilhar apenas o que for exportado explicitamente.
 
## Objetivo❗
 
Praticar e documentar, com exemplos próprios, os principais conceitos de módulos:
 
- Exportação nomeada (`export`)
- Exportação padrão (`export default`)
- Importação nomeada e importação com `as` (apelido)
- Importação de tudo com `import * as`
- Combinação de export nomeado e export default no mesmo arquivo
- Re-exportação (`export ... from`)
- Diferença entre módulos ES (`import`/`export`) e CommonJS (`require`/`module.exports`)
- Uso de módulos no navegador (`<script type="module">`)
- Uso de módulos no Node.js (`"type": "module"` no `package.json`)
 
## Exemplos✅
 
### Exportação nomeada
 
```js
// matematica.js
export function somar(a, b) {
  return a + b;
}
 
export const PI = 3.14159;
```
 
### Importação nomeada
 
```js
// index.js
import { somar, PI } from "./matematica.js";
 
console.log(somar(2, 3)); // 5
console.log(PI);          // 3.14159
```
 
### Exportação padrão
 
```js
// formatador.js
export default function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2)}`;
}
```
 
### Importação padrão
 
```js
// index.js
import formatarMoeda from "./formatador.js";
 
console.log(formatarMoeda(19.9)); // "R$ 19.90"
```
 
### Importando tudo de um módulo
 
```js
import * as Matematica from "./matematica.js";
 
console.log(Matematica.somar(1, 1)); // 2
console.log(Matematica.PI);          // 3.14159
```
 
### Apelidando uma importação
 
```js
import { somar as adicionar } from "./matematica.js";
 
console.log(adicionar(4, 5)); // 9
```
 
## Como rodar os exemplos
 
### No Node.js
 
Adicione `"type": "module"` ao `package.json`:
 
```json
{
  "type": "module"
}
```
 
E execute normalmente:
 
```bash
node index.js
```
 
### No navegador
 
Marque o script como módulo no HTML:
 
```html
<script type="module" src="index.js"></script>
```


