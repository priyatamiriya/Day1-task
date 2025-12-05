const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = ` <span class="task">${taskText}</span> <button class="delete">X</button>`;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.querySelector(".delete").addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
});
