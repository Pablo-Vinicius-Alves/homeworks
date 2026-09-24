const form = document.getElementById('form-tarefa');
const input = document.getElementById('input-tarefa');
const inputNum = document.getElementById('input-dias');
const lista = document.getElementById('lista-tarefas')

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    const texto = input.value.trim()

    if(texto === ''){
        return;
    }

    const novoItem = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = texto;

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('btn-excluir');

    novoItem.appendChild(span);
    novoItem.appendChild(btnExcluir);

    lista.appendChild(novoItem);

    input.value = '';
});

lista.addEventListener('click', function(evento){
    evento.preventDefault();

    const botao = evento.target.closest('.btn-excluir');

    if(botao) {
        const item = botao.closest('li');
        item.remove();
    };
});