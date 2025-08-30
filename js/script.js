// Array to store tasks
let tasks = [];
let taskIdCounter = 0;

// Add a new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskName = taskInput.value.trim();

  if (taskName !== "") {
    tasks.push({
      id: taskIdCounter++,
      name: taskName,
      done: false
    });
    taskInput.value = "";
    renderTasks();
  }
}

// Render all tasks
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    const span = document.createElement("span");
    span.textContent = task.name;
    if (task.done) {
      span.style.textDecoration = "line-through";
    }

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-sm btn-success me-2";
    toggleBtn.textContent = "Toggle";
    toggleBtn.onclick = () => toggleTask(task.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(task.id);

    const btnGroup = document.createElement("div");
    btnGroup.appendChild(toggleBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    taskList.appendChild(li);
  });
}

// Toggle task completion
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  renderTasks();
}

// Delete a task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}
