document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.querySelector('.todo-list');
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => addTodoElement(todo));
    }

    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function addTodoElement(todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.textContent = todo;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            const newTodos = todos.filter(t => t !== todo);
            saveTodos(newTodos);
            todoDiv.remove();
        });

        todoDiv.appendChild(deleteButton);
        todoList.appendChild(todoDiv);
    }

    function Addingtodo() {
        const todoText = newTodoInput.value.trim();
        if (todoText === '') return;

        addTodoElement(todoText);

        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todoText);
        saveTodos(todos);

        newTodoInput.value = '';
    }

    addTodoButton.addEventListener('click', Addingtodo);
    newTodoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') Addingtodo();
    });

    loadTodos();
});
