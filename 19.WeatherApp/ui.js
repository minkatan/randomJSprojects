class UI {
    constructor() {
        this.location = document.getElementById('location')
        this.currentWeather = document.getElementById('weatherText')
        this.temperature = document.getElementById('temperature')
        this.weatherIcon = document.getElementById('weather-icon')
        this.realFeel = document.getElementById('real-feel')
        this.uvIndex = document.getElementById('uv-index')
        this.humidity = document.getElementById('humidity')
    }

    paint(weather) {
        const weatherImage = weather.WeatherIcon;
        const image = String(weatherImage).padStart(2,'0')
        const imageLink = `https://developer.accuweather.com/sites/default/files/${image}-s.png`

        
        this.currentWeather.textContent = weather.WeatherText;
        this.temperature.innerHTML = `Current temperature: ${weather.Temperature.Metric.Value} &#8451;`;


        this.weatherIcon.setAttribute('src', imageLink)
        this.realFeel.innerHTML = `Real feel : ${weather.RealFeelTemperature.Metric.Value} &#8451;`;
        this.uvIndex.textContent = `UV Index : ${weather.UVIndexText}`;
        this.humidity.textContent = `Humidity : ${weather.RelativeHumidity}`;
    }

    paintLocation(location){
        this.location.textContent = `${location.EnglishName}, ${location.Country.ID}` ;
    }

    
}