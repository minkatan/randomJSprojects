document.getElementById('name').addEventListener('blur',validateName)
document.getElementById('zipcode').addEventListener('blur',validateZipcode)
document.getElementById('email-address').addEventListener('blur',validateEmail)
document.getElementById('phone-number').addEventListener('blur',validatePhone)

function validateName() {
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error')
    const re = /^[a-zA-Z]{2,10}$/;

    
    if (!re.test(name.value)) {
        nameError.style.display = 'block'  
    } else {
        nameError.style.display = 'none'  
    }
    
}
function validateEmail() {
    const email = document.getElementById('email-address');
    const emailError = document.getElementById('email-error')
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,8})$/;

    
    if (!re.test(email.value)) {
        emailError.style.display = 'block'  
    } else {
        emailError.style.display = 'none'  
    }
    
}
function validateZipcode() {
    const zip = document.getElementById('zipcode');
    const zipError = document.getElementById('zipcode-error')
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    
    if (!re.test(zip.value)) {
        zipError.style.display = 'block'  
    } else {
        zipError.style.display = 'none'  
    }
    
}
function validatePhone() {
    const phone = document.getElementById('phone-number');
    const phoneError = document.getElementById('phone-error')
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    
    if (!re.test(phone.value)) {
        phoneError.style.display = 'block'  
    } else {
        phoneError.style.display = 'none'  
    }
    
}