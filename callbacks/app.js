function processarPedido(produto, callback) {
    console.log(`Processando pedido de: ${produto}`);
    callback(produto);
}

function confirmarPedido(produto) {
    console.log(`Pedido de "${produto}" confirmado!`);
}

processarPedido("Notebook", confirmarPedido);

console.log("---");

function buscarPreco(produto, callback) {
    console.log(`Consultando preço de "${produto}"...`);
    setTimeout(() => {
        const precos = { Notebook: 3500, Mouse: 80 };
        const preco = precos[produto];

        if (preco) {
            callback(null, preco);
        } else {
            callback(new Error("Produto não encontrado"), null);
        }
    }, 1500);
}

buscarPreco("Notebook", (erro, preco) => {
    if (erro) {
        console.log("Erro:", erro.message);
        return;
    }
    console.log(`Preço encontrado: R$ ${preco}`);
});

buscarPreco("Teclado", (erro, preco) => {
    if (erro) {
        console.log("Erro:", erro.message);
        return;
    }
    console.log(`Preço encontrado: R$ ${preco}`);
});

console.log(" Programa continua rodando...");