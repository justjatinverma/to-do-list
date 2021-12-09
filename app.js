//selectors
const task =document.querySelector('#task') ;
const todoButton =document.querySelector('#btn') ;
const todoList =document.querySelector('#todo-list') ;

// event listener
todoButton.addEventListener("click",addToDo);
todoList.addEventListener("click", deleteCheck);

// function

function addToDo(event) {
    // prevent form from submitting
    event.preventDefault();
    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // create li
    const newToDo = document.createElement('li');
    newToDo.innerText = task.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    // check mark
    const complectedButton = document.createElement('button');
    complectedButton.innerHTML = '<i class="fas fa-check"></i>';
    complectedButton.classList.add("complete-btn");
    todoDiv.appendChild(complectedButton);
    // trash mark
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv)
    task.value = " ";
}

function deleteCheck(e) {
    const item = e.target;
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.remove();
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

