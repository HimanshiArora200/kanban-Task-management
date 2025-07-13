function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
}

function hideSidebar() {
  document.getElementById("sidebar").classList.toggle("hidden");
}

function showModal() {
  document.getElementById("taskModal").classList.add("show");
}

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const subtasks = document.getElementById("taskSubtasks").value;
  const column = document.getElementById("taskColumn").value;
  if (!title || !subtasks || !column) return;

  const task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `
    <div class="task-title">${title}</div>
    <div class="task-subtasks">${subtasks}</div>
  `;

  const targetColumn = document.getElementById(column + "Column");
  targetColumn.appendChild(task);

  // Reset form
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskSubtasks").value = "";
  document.getElementById("taskColumn").value = "todo";
  document.getElementById("taskModal").classList.remove("show");
}
