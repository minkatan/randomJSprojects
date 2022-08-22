const canvas = document.getElementById("canvas");

const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const sizeBtn = document.getElementById("size")
const colorId = document.getElementById("color")
const resetBtn = document.getElementById("reset")

const ctx = canvas.getContext("2d");

let size = 5;
let isPressed = false;
let color = "black";
let x = undefined
let y = undefined


colorId.addEventListener ("change" , (e) => {
    color = e.target.value
})


canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX
    y = e.offsetY

});

canvas.addEventListener("mouseup", () => {
    isPressed = false;

    x = undefined
    y = undefined
})

canvas.addEventListener("mousemove",(e) => {
    if (isPressed) {
        
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        
        drawCircle(x2, y2);
        drawline(x, y, x2, y2);
        x = x2;
        y = y2;

    }
});

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawline (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

increaseBtn.addEventListener("click", () => {
    size += 5

    if (size > 50) {
        size = 50
    }

    updateSize();
});

decreaseBtn.addEventListener("click", () => {
    size -= 5

    if (size < 5) {
        size = 5;
    }

    updateSize();
})

resetBtn.addEventListener("click", () => {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSize() {
    sizeBtn.innerText = size;
}



