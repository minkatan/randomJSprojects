const form = document.querySelector('form')
const taskInput = document.getElementById('task')

// form.addEventListener('submit', runEvent)
// form.addEventListener('keydown', runEvent)
// form.addEventListener('keyup', runEvent)
// form.addEventListener('keypress', runEvent)

// taskInput.addEventListener('focus', runEvent)
// taskInput.addEventListener('paste', runEvent)
// taskInput.addEventListener('cut', runEvent)

function runEvent(e) {
    e.preventDefault();

    console.log(`Event Type: ${e.type}`)
    // console.log(e.target.value)

    // taskInput.value = '';
}