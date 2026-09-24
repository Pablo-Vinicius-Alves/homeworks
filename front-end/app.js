const form = document.getElementById('form-tarefa');
const input = document.getElementById('input-tarefa');
const inputNum = document.getElementById('input-dias');
const lista = document.getElementById('lista-tarefas')

function criarItemTarefa(texto, concluida) {
    const novoItem = document.createElement('li');
    if (concluida) {
        novoItem.classList.add('concluida');
    }

    const span = document.createElement('span');
    span.textContent = texto;

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('btn-excluir');

    const btnConcluido = document.createElement('button');
    btnConcluido.textContent = 'Concluída';
    btnConcluido.classList.add('btn-concluido');

    const acoes = document.createElement('div');
    acoes.classList.add('acoes');
    acoes.appendChild(btnConcluido);
    acoes.appendChild(btnExcluir);

    novoItem.appendChild(span);
    novoItem.appendChild(acoes);
    lista.appendChild(novoItem);
}

function salvarTarefas() {
    const itens = lista.querySelectorAll('li');
    const tarefas = [];

    itens.forEach(function(item) {
        tarefas.push({
            texto: item.querySelector('span').textContent,
            concluida: item.classList.contains('concluida')
        });
    });

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    const dados = localStorage.getItem('tarefas');
    if (!dados) {
        return;
    }

    const tarefas = JSON.parse(dados);
    tarefas.forEach(function(tarefa) {
        criarItemTarefa(tarefa.texto, tarefa.concluida);
    });
}

form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const texto = input.value.trim();

    if (texto === '') {
        return;
    }

    criarItemTarefa(texto, false);
    salvarTarefas();

    input.value = '';
});

lista.addEventListener('click', function(evento) {
    const botaoEx = evento.target.closest('.btn-excluir');
    if (botaoEx) {
        const item = botaoEx.closest('li');
        item.remove();
        salvarTarefas();
        return;
    }

    const botaoCon = evento.target.closest('.btn-concluido');
    if (botaoCon) {
        const item = botaoCon.closest('li');
        item.classList.toggle('concluida');
        salvarTarefas();
        return;
    }
});

carregarTarefas();





// form.addEventListener('submit', function(evento){
//     evento.preventDefault();

//     const texto = input.value.trim()

//     if(texto === ''){
//         return;
//     }

//     const novoItem = document.createElement('li');

//     const span = document.createElement('span');
//     span.textContent = texto;

//     const btnExcluir = document.createElement('button');
//     btnExcluir.textContent = 'Excluir';
//     btnExcluir.classList.add('btn-excluir');

//     const btnConcluido = document.createElement('button');
//     btnConcluido.textContent = 'Concluída';
//     btnConcluido.classList.add('btn-concluido');

//     const acoes = document.createElement('div');
//     acoes.classList.add('acoes');
//     acoes.appendChild(btnConcluido);
//     acoes.appendChild(btnExcluir);
    
//     novoItem.appendChild(span);
//     novoItem.appendChild(acoes);
//     lista.appendChild(novoItem);

//     input.value = '';
// });
// lista.addEventListener('click', function(evento){
//     evento.preventDefault();

//     const botaoEx = evento.target.closest('.btn-excluir');

//     if(botaoEx) {
//         const item = botaoEx.closest('li');
//         item.remove();
//     };

//     const botaoCon = evento.target.closest('.btn-concluido');
//     if(botaoCon){
//         const item =  botaoCon.closest('li');
//         item.classList.toggle('concluida');
//         return;
//     }
// });

