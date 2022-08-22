class Weather {
    constructor(postalCode) {
        this.apiKey='Ow8Abqyxsxn42N72q1eG6hF3t7uKzdwk&q';
        this.postalCode = postalCode;
        this.cors = 'cors-anywhere.herokuapp.com/'
    }

async getLocation(){
    const responseKey = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}=${this.postalCode}`);
    
    const responseData = await responseKey.json();
    
    return responseData[0]
}

async getWeather(){

    const location = await(this.getLocation())

    const responseWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${location.Key}?apikey=${this.apiKey}&details=true`)
    
    const weatherData = await responseWeather.json();

    return weatherData[0]
}

changeLocation (postalCode) {
    this.postalCode = postalCode;
    }
}

