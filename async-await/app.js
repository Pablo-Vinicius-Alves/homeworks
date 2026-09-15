// const promessa = new Promise((resolve, reject) => {
//     const ok = Math.random() > 0.5;
//     setTimeout(() => {
//         if (ok) resolve("Deu certo!")
//         else reject(new Error("Deu errado!"));
//     }, 1000);
// });

// async function buscarDados() {
//     const resposta = await fetch("http://api.teste/dados");
//     const json = await resposta.json();
//     return json;
// }

// buscarDados();

// async function buscarUsuarios(id) {
//     try {
//         const resp = await fetch(`/usuarios/${id}`);
//         if (!resp.ok) throw new Error(`Erro HTTP: ${resp.status}`);
//         return await resp.json();
//     } catch (erro) {
//         console.error("Falha", erro.message);
//         throw erro;
//     }
// }

// buscarUsuarios(2); // id

function tarefa1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("resultado 1"), 1000);
    });
}

function tarefa2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("resultado 2"), 1000);
    });
}

function tarefa3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("resultado 3"), 1000);
    });
}

async function Paralelo() {
    console.time("paralelo");
    const [a, b, c] = await Promise.all([tarefa1(), tarefa2(), tarefa3()]);
    console.timeEnd("paralelo");
    console.log(a, b, c);
}

Paralelo().then