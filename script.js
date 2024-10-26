const inputTask = document.querySelector(".input-task");
const taskList = document.querySelector(".task-list");
const addTaskButton = document.querySelector(".add-btn");

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  const taskText = inputTask.value.trim();
  if (inputTask.value !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
  } else {
    alert("You must write something!");
  }

  inputTask.value = "";
});
