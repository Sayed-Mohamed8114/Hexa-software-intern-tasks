const inputTask = document.getElementById("input-task");
const addTaskBTN = document.getElementById("add-task");
const TaskTable = document.getElementById("taskTable");
//local data from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks()

addTaskBTN.addEventListener("click", () => {
    if (inputTask.value.trim() !== "") {
        tasks.push(inputTask.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        inputTask.value = "";
        renderTasks();
    }

});

function removeTask() {

}

function editTask() {

}


// when you add a new task this is what responsible about it 
function renderTasks() {
    TaskTable.innerHTML = "";
    tasks.forEach((task, index) => {
        TaskTable.innerHTML += `
        <tr>
           <td class="p-2 font-mono">${task}</td>
           <td class="text-center"><button onclick="e"  class="cursor-pointer text-sm font-semibold text-center bg-green-500/80 p-1 rounded-sm text-slate-50">Edit</button></td>
           <td class="text-center"><button onclick="e" class="cursor-pointer text-sm font-semibold text-center bg-red-500/80 p-1 rounded-sm text-slate-300">Remove</button></td>
        </tr>
        `;
    });
}