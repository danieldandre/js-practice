const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#tasklist');
const errorMessage = document.querySelector('#errorMessage');
const clearCompletedBtn = document.querySelector('#clearCompletedBtn');


function toggleClearCompleteBtn() {
    if (taskList.children.length >= 1) {
        clearCompletedBtn.classList.remove("hidden");
    } else {
        clearCompletedBtn.classList.add("hidden");
    }
}

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDiv = document.createElement("div");
    const taskContent = document.createElement("span");
    const completeBtn = document.createElement("button");

    //Input validation
    if (taskText === "") {
        errorMessage.textContent = "Please write the name of your task";
        errorMessage.classList.remove("hidden");

        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList.add("hidden");
        }, 3000);
        return;
    }

    //task container
    taskDiv.className = "bg-gray-700 rounded p-4 flex justify-between items-center";

    //task text
    taskContent.textContent = taskText;
    taskContent.className = "text-gray-100"

    //Complete button
    completeBtn.textContent = "Complete"
    completeBtn.className = "bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"

    //Append content
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(completeBtn);
    taskList.appendChild(taskDiv);

    //clear input
    taskInput.value = "";

    //Toggle complete
    completeBtn.addEventListener('click', () => {
        taskContent.classList.toggle('line-through');
        taskContent.classList.toggle('text-gray-400');
    });

    toggleClearCompleteBtn();
}

function clearCompletedTasks() {
    const completedTasks = taskList.querySelectorAll('.line-through');
    completedTasks.forEach(task => taskList.removeChild(task.parentElement));

    toggleClearCompleteBtn();
}

addTaskBtn.addEventListener('click', addTask);
clearCompletedBtn.addEventListener('click', clearCompletedTasks);