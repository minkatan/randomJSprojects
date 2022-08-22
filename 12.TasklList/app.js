// Define UI variables
const form = document.getElementById('task-form')
const taskList = document.getElementById('task-list')
const clearBtn = document.getElementById('clear-tasks')
const taskInput = document.getElementById('task-input')
const filterTaskEl = document.getElementById('filter-tasks')


// load all event listeners
loadEventListeners()

// function load all event listeners
function loadEventListeners() {
  // load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // add task event
  form.addEventListener('submit',addTask)
  // remove task event
  taskList.addEventListener('click', removeTask)
  // clear all tasks
  clearBtn.addEventListener('click', removeAllTask)
  // filter tasks
  filterTaskEl. addEventListener('keyup',filterTask)

}

// Get Tasks
function getTasks() {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    // create list of tasks
  const li = document.createElement('li')
  li.className = 'flex justify-between'
  li.setAttribute('id', 'tasks')
  const text = document.createTextNode(task)
  li.appendChild(text)

  // delete button
  const span = document.createElement('span')

  span.className = 'text-red-800 cursor-pointer text-2xl'
  span.innerText ='x'
  span.setAttribute('id', 'delete-task')
  li.appendChild(span)
  
  taskList.appendChild(li)
  })
}

// add task
function addTask(e) {

  e.preventDefault()
  
  if(taskInput.value === '') {
    alert('please add a task');
  }
  
  // create list of tasks
  const li = document.createElement('li')
  li.className = 'flex justify-between'
  li.setAttribute('id', 'tasks')
  const text = document.createTextNode(taskInput.value)
  li.appendChild(text)

  // delete button
  const span = document.createElement('span')

  span.className = 'text-red-800 cursor-pointer text-2xl'
  span.innerText ='x'
  span.setAttribute('id', 'delete-task')
  li.appendChild(span)
  
  taskList.appendChild(li)

  storeTaskInLocalStorage(taskInput.value)

  taskInput.value = ''

  }

  // store task in local storage

function storeTaskInLocalStorage (task) {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

  // Remove Task
function removeTask(e) {
  const parent = e.target.parentElement

  if (parent.getAttribute('id') === 'tasks') {

    parent.remove()

    // remove from local storage
    removeTaskFromLocalStorage(parent);
  }
}

// remove from local storage

function removeTaskFromLocalStorage(task){
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(currentTask, index){
    if(task.textContent === (currentTask + 'x')) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeAllTask() {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage() {
  localStorage.clear()
}

function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('li').forEach(function(task) {
    const item = task.firstChild.textContent;
    
    // filter. can leaarn how to do exact match
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = 'flex'
    } else {
      task.style.display = 'none'
    }
  })
}