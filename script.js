
// Select elements
const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');

    // Add task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    li.appendChild(taskContent);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => {
        li.remove();
    };

    li.appendChild(deleteButton);

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Function to handle the Enter key press
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Add task on button click
addTaskButton.addEventListener('click', addTask);
