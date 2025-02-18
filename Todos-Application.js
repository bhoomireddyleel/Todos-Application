// Add event listeners for the add button and "Enter" key
document.getElementById('add-btn').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        return; // Do nothing if input is empty
    }

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `<span>${todoText}</span><button class="delete-btn">&times;</button>`;

    // Toggle completed state when clicking the text
    li.querySelector('span').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Remove the todo when clicking the delete button
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Append the new todo item to the list
    document.getElementById('todo-list').appendChild(li);

    // Clear and refocus the input field
    todoInput.value = "";
    todoInput.focus();
}