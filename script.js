
// So first lets define the variables
const inputField = document.getElementById("new-task")

// Now when we click on add button, our add task function is call
// This function will get the value of the input field and add it to the list
// and performing Add Delete Edit Complete action on that list
function addTask(){

    // 1. we get the text from input feild
    const taskText = inputField.value.trim();
    if (!taskText) return alert("Please enter a task.");

    // Create new task item
    const newTask = document.createElement("li");

    // Create task text element
    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;
    newTask.appendChild(taskTextElement);

    // 3. lets complete the task 
    const completeButton = document.createElement("button");
    completeButton.classList.add("fas", "fa-check");
    newTask.appendChild(completeButton);

    completeButton.onclick = function() {
        taskTextElement.classList.toggle("completed");
    };

    //4 . Create edit button
    const editButton = document.createElement("button");
    editButton.classList.add("fas", "fa-edit");
    newTask.appendChild(editButton);

    editButton.onclick = function() {
        const newTaskText = prompt("Edit your task:", taskTextElement.innerText);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskTextElement.innerText = newTaskText;
        }
    };

    //5.  Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("fas", "fa-trash");
    newTask.appendChild(deleteButton)
    
    deleteButton.onclick = function() {
        newTask.remove();
    };

   // Append the new task to the task list
   const taskList = document.getElementById("task-list");
   taskList.appendChild(newTask);

   // Clear the input field
   inputField.value = "";
}
