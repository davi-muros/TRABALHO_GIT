const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");
    const taskName = document.createElement("span");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    taskName.textContent = taskText;

    completeButton.textContent = "Concluir";
    completeButton.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    deleteButton.textContent = "Excluir";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.append(taskName, completeButton, deleteButton);
    taskList.appendChild(listItem);

    input.value = "";
    input.focus();
});
