// * Model
// * If localstorage has a todos array, then use it 
// * Otherwise use the default array
let todos;

 // * Retrieve localStorage
 const savedTodos = JSON.parse(localStorage.getItem('todos'));
 // * Check if it's an array
if (Array.isArray(savedTodos)){
    todos = savedTodos;
}else{
    todos = [{
        title: 'Get something',
        dueDate: '2023-10-04',
        id: 'id1'
        }, {
            title:'Leave something',
            dueDate:'2023-02-03',
            id: 'id2'
        }, {
        title: 'Create Something',
        dueDate: '2023-03-07',
        id: 'id3'
        }];
}


    // * Create Todo 
    function createTodo(title, dueDate){
        const id = '' + new Date().getTime();

        todos.push({
            title: title,
            dueDate: dueDate,
            id: id,
        });

        saveTodos();
    }

    // * Delete Todo 
    function removeTodo(idToDelete){
        todos = todos.filter(function(todo){
            // if the id of this todo matches idtodelete, return false
            // for everything else, return true 
            if (todo.id === idToDelete){
                return false;
            } else{
                return true;
            }
        });

        saveTodos();
    }

    function saveTodos(){
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    //* Controller section 
const button = document.getElementById('btn');
button.addEventListener('click', addNewTodo);

    render();

function addNewTodo(){
    const textbox = document.getElementById('title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createTodo(title, dueDate);

    render();
}

function deleteTodo(event){
    const deleteButton = event.target;
    const idToDelete  = deleteButton.id;

    removeTodo(idToDelete)

    render();
}

// * View Section
 
function render(){
    // * Reset our list 
    document.getElementById('todo-list').innerHTML = '';
    // * 
    todos.forEach(function(todos){
        const element = document.createElement('div');
        element.innerText = todos.title + ' ' + todos.dueDate;
    // * Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px;'
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todos.id;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    })
}

