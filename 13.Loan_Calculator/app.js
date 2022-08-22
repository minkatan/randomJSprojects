const form = document.getElementById('loan-form')
const amountEl = document.getElementById('loan-amount');
const interestEl = document.getElementById('interest');
const yearEl = document.getElementById('years');
const loadingEl = document.getElementById('loading')
const resultEl = document.getElementById('result')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // hide result
    resultEl.style.display = 'none'
    // loading
    loadingEl.style.display = 'flex'

    setTimeout(calculateResults, 2000)
})

function calculateResults() {

    const monthPayEl = document.getElementById('monthly-payment');
    const interestPayEl = document.getElementById('total-interest');
    const totalEl = document.getElementById('total-payment');

    const principal = parseFloat(amountEl.value);
    const calculatedInterest = parseFloat(interestEl.value) / 100/ 12;
    const calculatedPayments = parseFloat(yearEl.value) * 12;

    // compute montly payment
    const i = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * i * calculatedInterest) / (i -1);

    if(isFinite(monthly)) {
        monthPayEl.value = format(monthly.toFixed(2))
        totalEl.value = format((monthly * calculatedPayments).toFixed(2))
        interestPayEl.value = format(((monthly * calculatedPayments) - principal).toFixed(2))

            // show result
        resultEl.style.display = 'grid'
        // hide loading
        loadingEl.style.display = 'none'
    } else {
        showError('Please check your numbers')
        resultEl.style.display = 'none'
        loadingEl.style.display = 'none'
    }
}

// show Error
function showError(error) {
    const divError = document.createElement('div')
    const amount = amountEl.parent

    divError.className = "bg-red-200 text-red-900 text-center text-2xl font-bold rounded border absolute inset-x-0 top-4"
    divError.setAttribute("id", "error")

    divError.appendChild(document.createTextNode(error))

    // insert error
    form.insertBefore(divError,amount)

    // clear error after seconds
    setTimeout(clearError, 2000);
}

// Clear Error
function clearError() {
    document.getElementById("error").remove()
}

// format numbers with comma
const format = num => 
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

;