const form = document.querySelector("form");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos")

const ToDoList = JSON.parse(localStorage.getItem("notes"));

if(ToDoList) {
    ToDoList.forEach(todo => {
        addToDo(todo)

    }); 
}

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    addToDo()

})

function addToDo(todo) {
    
    let text = input.value;

    if(todo) {
        text = todo.text
    }

// if there's value in the input, create a class list
    if(text) {
        const todoEl = document.createElement("li");

        if(todo && todo.completed) {
            todoEl.classList.add("completed")
        }
        
        todoEl.innerText = text;
        
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS()

        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove()

            updateLS()
        });

        todos.appendChild(todoEl);

        // empty input
        input.value = ""

        updateLS()
    }
}

function updateLS() {
    const notesEl = document.querySelectorAll("li");

    const notes =[]

    notesEl.forEach(element => {
        notes.push({
            text: element.innerText,
            completed: element.classList.contains("completed")
        })
    });

    localStorage.setItem("notes",JSON.stringify(notes));
}