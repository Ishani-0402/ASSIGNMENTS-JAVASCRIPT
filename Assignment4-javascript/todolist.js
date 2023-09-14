// Get elements from the DOM
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Event listener for adding a task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Event listener for deleting a task
        const deleteButton = taskItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        // Event listener for marking a task as completed
        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        // Add the task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
});
