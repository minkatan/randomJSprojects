// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//     e.preventDefault();

//     console.log("Hello World");
// })

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();

    let x;

    x = e.target;
    x = e.target.classList;

    x = e.type;

    x = e.clientY
    y = e.clientX

    y = e.offsetY
    x = e.offsetX

    // console.log(x, y)
}


const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('dblclikc', runEvent);

// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);

// card.addEventListener('mouseenter',runEvent)
// card.addEventListener('mouseleave',runEvent)
// card.addEventListener('mouseover',runEvent)
// card.addEventListener('mouseout',runEvent)


card.addEventListener('mousemove',runEvent)

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

}