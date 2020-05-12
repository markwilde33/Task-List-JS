// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove task
  taskList.addEventListener("click", removeTask);
  // Clear (remove) all tasks at once
  clearBtn.addEventListener("click", clearTasks);
}

// Call the function
loadEventListeners();

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Enter a task to add");
  } else {
    // Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement("a");
    // Add class
    link.className = "delete-item secondary-content";
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"> </i>';
    // Append the link to the li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }
  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure about this comrade?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
// Clear (remove) all Tasks
function clearTasks(e) {
  if (e.target.previousElementSibling.classList.contains("collection")) {
    if (confirm("Are you sure about this my sweet princess?")) {
      e.target.previousElementSibling.remove();
    }
  }
}

// // Some other options to clear tasks, without the confirm alert
// function clearTasks(e) {
//   //   taskList.innerHTML = '';
//   // this one is faster than above
//   while (taskList.firstChild) {
//     taskList.removeChild(taskList.firstChild);
//   }
// }
