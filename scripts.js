function setRandomGradientBackground() {
    const gradients = [
        'linear-gradient(to right, #0f2027, #203a43, #2c5364)',

        'linear-gradient(to right, #434343, #000000)',
        'linear-gradient(to right, #4568dc, #b06ab3)',
        'linear-gradient(to right, #4A00E0, #8E2DE2)',
    ]
    document.body.style.background = gradients[Math.floor(Math.random() * gradients.length)];
}

document.getElementById('todo-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    let todoList = document.getElementById('todo-list');
    let todoInput = document.getElementById('todo-input');
    let newTodoText = todoInput.value;

    if (newTodoText.trim() !== '') {
        let newLi = document.createElement('li');
        newLi.textContent = newTodoText;
        newLi.addEventListener('click', function() {
            this.classList.toggle('done');
        });
        todoList.appendChild(newLi);
        todoInput.value = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setRandomGradientBackground();
});