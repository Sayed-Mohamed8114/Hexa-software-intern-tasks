const inputTask = document.getElementById("input-task");
const addTaskBTN = document.getElementById("add-task");
const TaskTable = document.getElementById("taskTable");

// the way i will use to make the edit on my tasks :
// regular mode : task -> edit button -> remove button
// edit mode : input task -> confirm edit -> cancel edit
let editIndex = null;

//local data from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

addTaskBTN.addEventListener("click", () => {
  if (inputTask.value.trim() !== "") {
    tasks.push(inputTask.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    inputTask.value = "";
    renderTasks();
  }
});

function removeTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function editTask(index) {
  editIndex = index;
  renderTasks();
}

function cancelEdit() {
  editIndex = null;
  renderTasks();
}

function saveEdit(index) {
  const input = document.getElementById(`editInput-${index}`);
  const newValue = input.value.trim();
  if (newValue !== "") {
    tasks[index] = newValue;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  editIndex = null;
  renderTasks();
}

// when you add a new task this is what responsible about it
function renderTasks() {
  TaskTable.innerHTML = "";
  tasks.forEach((task, index) => {
    if (editIndex === index) {
      TaskTable.innerHTML += `
            <tr>
                <td class="text-left ml-2">
                    <input id="editInput-${index}" value="${task}" 
                    class="w-full text-base ml-1.5 text-center p-1 rounded-md outline-0 bg-transparent text-slate-100 focus:border-slate-200" 
                    />
                </td>

                <td class="text-center">
                    <button onclick="saveEdit(${index})" 
                    class="cursor-pointer font-bold bg-linear-to-b from-slate-300 via-slate-400 to-blue-400 bg-clip-text text-transparent 
                    ">Save</button>
                </td>

                <td class="text-center">
                    <button onclick="cancelEdit()" 
                    class=" cursor-pointer font-bold bg-linear-to-b from-slate-300 via-slate-400 to-blue-400 bg-clip-text text-transparent 
                    ">Cancel</button>
                </td>
            </tr>
            `;
    } else {
      TaskTable.innerHTML += `
        <tr>
           <td class="p-2 font-mono">${task}</td>
           <td class="text-center"><button onclick="editTask(${index})"  class="cursor-pointer text-sm font-semibold text-center bg-green-500/80 p-1 rounded-sm text-slate-50">Edit</button></td>
           <td class="text-center"><button onclick="removeTask(${index})" class="cursor-pointer text-sm font-semibold text-center bg-red-500/80 p-1 rounded-sm text-slate-300">Remove</button></td>
        </tr>
        `;
    }
  });
}
