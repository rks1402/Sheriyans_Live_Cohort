let addTaskBtn = document.querySelector("#addTaskBtn");
let taskModal = document.querySelector("dialog");

addTaskBtn.addEventListener("click", () => {
    taskModal.showModal();
})

// Adding the task to task section logic

let todoSection = document.querySelector("#section1");
let addTaskTitle = document.querySelector("#addTaskTitle");
let addTaskDescription = document.querySelector("#addTaskDescription");
let dialogAddBtn = document.querySelector("#dialogAddBtn");

dialogAddBtn.addEventListener("click", () => {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task");
    let taskTitle = document.createElement("h5");
    taskTitle.textContent = addTaskTitle.value;
    let taskDescription = document.createElement("p");
    taskDescription.textContent = addTaskDescription.value;
    taskDiv.append(taskTitle, taskDescription);
    todoSection.appendChild(taskDiv);
})

// Making the task draggable

