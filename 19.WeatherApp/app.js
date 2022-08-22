// initialized weather object
const storage = new Storage
const weatherLocation = storage.getLocationData()

// initialized weather object
const weather = new Weather(weatherLocation.postalCode);

// initialized ui object
const ui = new UI()

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather)
document.addEventListener('DOMContentLoaded', getLocation)

// weather.changeLocation('M6K0H1')
document.getElementById('change-location').addEventListener('click', (e) => {

    const displayPostal = document.getElementById('submit-form');
    if (displayPostal.style.display === 'none') {
        displayPostal.style.display = 'flex'
    } else {
        displayPostal.style.display = 'none'
        
        const postalCode = document.getElementById('submit-postal').value;
        
        // change location
        weather.changeLocation(postalCode)
        // set location into local storage
        storage.setLocationData(postalCode)
        
        getWeather();
        getLocation();
    }
})

function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results);    
        })
        .catch(error => console.log(error));
}

function getLocation(){
    weather.getLocation()
        .then(results => {
            ui.paintLocation(results)
        })
        .catch(error => console.log(error));
}

