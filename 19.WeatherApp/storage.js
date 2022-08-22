class Storage {
    constructor() {
        this.postalCode;
        this.defaultpostalCode = '53703'
    }

    getLocationData() {
        if(localStorage.getItem('postal_code') === null) {
            this.postalCode = this.defaultpostalCode
        } else {
            this.postalCode = localStorage.getItem('postal_code')
        }

        return {
            postalCode: this.postalCode
        }
    }

    setLocationData(postalCode) {
        localStorage.setItem('postal_code', postalCode)
    }
}