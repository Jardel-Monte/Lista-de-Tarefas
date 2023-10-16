// Função para adicionar uma nova tarefa
function novaTarefa() {
    const tarefaInput = document.getElementById("tarefa");
    const tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto === "") {
        alert("Por favor inserir tarefa desejada.");
        return;
    }

    const tarefaLista = document.getElementById("tarefa-lista");

    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" id="checkbox">
        <span>${tarefaTexto}</span>
        <button class="remover" onclick="removerTarefa(this)">Remover</button>
    `;

    tarefaLista.appendChild(li);

    tarefaInput.value = ""; // Limpar a caixa de input
}

// Função para remover uma tarefa
function removerTarefa(button) {
    const tarefaLista = document.getElementById("tarefa-lista");
    tarefaLista.removeChild(button.parentElement);
}