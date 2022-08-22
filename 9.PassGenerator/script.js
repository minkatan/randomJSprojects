const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+?"

const resultEl = document.getElementById("pass");
const copy = document.getElementById("copy");
const lenEl = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const num = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

const randomFunc = {
    lower: getLowerCase,
    upper: getUpperCase,
    number: getNumber,
    symbol: getSymbol
}

copy.addEventListener("click", () => {
    const textArea = document.createElement("textarea")
    const password = resultEl.innerText

    if(!password) {return}

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    textArea.remove()
    alert("Password copied to clipboard")
})

generate.addEventListener("click", () => {
    const length = lenEl.value
    const hasLower = lower.checked
    const hasUpper = upper.checked
    const hasNumber = num.checked
    const hasSymbol = symbol.checked

    console.log(length, hasLower, hasUpper, hasNumber, hasSymbol)

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ""
    const count = lower + upper + number + symbol
    const array = [ {lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if (count === 0) {
        return ""
    }

    for (let i = 0; i < length; i += count) {
        array.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0,length)

    return finalPassword;
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ""
    const count = lower + upper + number + symbol
    const array = [ {lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if (count === 0) {
        return ""
    }

    for (let i = 0; i < length; i += count) {
        array.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0,length)

    return finalPassword;
}