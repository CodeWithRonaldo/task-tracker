const addTaskButton = document.querySelector(".add-btn");
const inputTask = document.querySelector(".input-task");
const taskList = document.querySelector(".task-list");
const taskCategory = document.querySelector(".task-category");
const taskPriority = document.querySelector(".task-priority");
const taskDueDate = document.querySelector(".task-due-date");
const sortTasks = document.querySelector(".sort-tasks");
const filterTasks = document.querySelector(".filter-tasks");
const taskTable = document.querySelector(".task-table tbody");

const listedTaskArray = [];
let listedTasks;
addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  const taskText = inputTask.value.trim();
  const taskCategoryValue = taskCategory.value;
  const taskPriorityValue = taskPriority.value;
  const taskDueDateValue = taskDueDate.value;

  if (taskText && taskCategoryValue && taskPriorityValue && taskDueDateValue) {
    const task = {
      text: taskText,
      category: taskCategoryValue,
      priority: taskPriorityValue,
      dueDate: taskDueDateValue,
    };
    listedTaskArray.push(task);
    listedTasks = listedTaskArray;

    AddTaskToList(listedTasks);
  } else {
    alert("You must fill all fields!");
  }
});

const AddTaskToList = (taskArray) => {
  taskTable.innerHTML = "";
  taskArray.forEach((task) => {
    const tableRow = document.createElement("tr");

    const taskCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const priorityCell = document.createElement("td");
    const dueDateCell = document.createElement("td");

    taskCell.textContent = task.text;
    categoryCell.textContent = task.category;
    priorityCell.textContent = task.priority;
    dueDateCell.textContent = task.dueDate;

    tableRow.appendChild(taskCell);
    tableRow.appendChild(categoryCell);
    tableRow.appendChild(priorityCell);
    tableRow.appendChild(dueDateCell);

    taskTable.appendChild(tableRow);
  });
};

filterTasks.addEventListener("change", () => {
  const filteredTask = listedTasks.filter((task) => {
    return task.category.toLowerCase() === filterTasks.value.toLowerCase();
  });
  if (filteredTask.length > 0) {
    AddTaskToList(filteredTask);
  } else {
    AddTaskToList(listedTasks);
  }
});
const priorityLevel = { High: 1, Medium: 2, Low: 3 };
sortTasks.addEventListener("change", () => {
  const sortedTask = listedTasks.sort((a, b) => {
    if (sortTasks.value === "dueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortTasks.value === "priority") {
      return priorityLevel[a.priority] - priorityLevel[b.priority];
    } else {
    }
  });
  AddTaskToList(sortedTask);
});
