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
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.textContent = tarefaTexto;
  const removerButton = document.createElement("button");
  removerButton.classList.add("remover");
  removerButton.textContent = "X";



  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removerButton);

  tarefaLista.appendChild(li);

  tarefaInput.value = ""; // Limpar a caixa de input

// Adicionar um event listener para o botão "remover" para remover a tarefa
    removerButton.addEventListener("click", function () {
        removerTarefa(li);
    });
}

// Função para remover a tarefa desejada
function removerTarefa(li) {
  const tarefaLista = document.getElementById("tarefa-lista");
  tarefaLista.removeChild(li);
}
