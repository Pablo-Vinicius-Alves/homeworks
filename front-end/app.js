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
    novoItem.textContent = texto;
    lista.appendChild(novoItem);

    input.value = '';
});