// 'Give a number between ${min} to ${max}'
const gameEl = document.getElementById('game')
const optionEl = document.getElementById('option')
const inputEl = document.getElementById('input')
const minEl = document.getElementById('min')
const maxEl = document.getElementById('max')
const rangeEl = document.getElementById('range')
const guessAnswer = document.getElementById('guess')
const guessSubmit = document.getElementById('guess-submit')
const messageEl = document.getElementById('message')
const guessesAllowed = document.getElementById('guess-allowed')

let min;
let max;
let guessAllowed;
let winningNumber;

maxEl.addEventListener("keyup", enterKey)
minEl.addEventListener("keyup", enterKey)
guessesAllowed.addEventListener("keyup", enterKey)

// play again event listener
inputEl.addEventListener('mousedown',function(e) {

    if(e.target.getAttribute('id') === "play-again"){
        window.location.reload();
    }
})

// listen to min and max entry.
function enterKey({key}) {
    if (key === "Enter" && minEl.value !== '' && maxEl.value !== '') {
        // Show game
        optionEl.style.display = 'none'
        gameEl.style.display = 'flex'
        
        // set min and max 
        min = parseInt(minEl.value);
        max = parseInt(maxEl.value);
        guessAllowed = parseInt(guessesAllowed.value);
        // 
        updateRange(min, max)
        reset()
        
        winningNumber = getRandomNumber(min,max);

// Listen for guess
        guessSubmit.addEventListener('click', function(e){
            e.preventDefault()

            let guess = parseInt(guessAnswer.value)

        if (isNaN(guess) || guess < min || guess > max) {
            removeColor();
            setMessage(`Please enter a number between ${min} and ${max}`, 'red')   
            } 

            if (guess === winningNumber) {
                // disable guess input
                gameOver(true,`${winningNumber} is correct!`)

            }  else {
                guessAllowed -= 1;

                if (guessAllowed === 0){
                    // gameover
                gameOver(false,`The correct number is ${winningNumber}. You Lost!`)

                } else {
                    // game continues - with wrong answer 
                    guessValue = parseInt(guessAnswer.value)

                    if (guessValue >= min && guessValue <= winningNumber) {
                        min = guessValue;
                    } else if (guessValue <= max && guessValue >= winningNumber) { 
                        max = guessValue;
                    }
                    updateRange(min,max)

                    guessAnswer.value = ''
                    removeColor();
                    setMessage(`${guess} is not correct. ${guessAllowed} left. Please try again`, 'amber')
                }
            }
        });

    } else if(minEl.value !== '' || maxEl.value !== '') {

    } else {
        setMessage("Please set a minimum and maximum number",'red')
    }
}

// Game Over, reset Game
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    
    guessAnswer.disabled = true;
    // guessSubmit.disabled = true;
    removeColor();
    setMessage(msg,color)
    
    // reset the game
    guessSubmit.innerText = "Play Again";
    guessSubmit.setAttribute('id', 'play-again')
}

// Get Winning Number
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function updateRange(min,max) {

    rangeEl.innerText = `Give a number between ${min} to ${max}`

}

function setMessage(msg, color){
    messageEl.textContent = msg
    messageEl.classList.add(`text-${color}-700`)
    messageEl.classList.add(`bg-${color}-100`)
}

function reset() {
    guessAnswer.disabled = false;
    guessSubmit.disabled = false;
    messageEl.textContent = ''
    removeColor()
}

function removeColor() {
    messageEl.classList.remove('text-red-700','bg-red-100')
    messageEl.classList.remove('text-green-700','bg-green-100')
    messageEl.classList.remove('text-amber-700','bg-amber-100')
}