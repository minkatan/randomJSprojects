// localStorage.setItem('name', 'John')

// const name = localStorage.getItem('name')
// console.log(name)

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value
  console.log(task)

  e.preventDefault()
})

// console.log(task)