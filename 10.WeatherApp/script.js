const api_location = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"


const search = document.getElementById("search");    
const form = document.querySelector("form");


async function getLocation(search) {
    const res = await fetch(api_location + "search/?query=" + search)
    const resData = await res.json();

    const res2 = await fetch(api_location + resData[0].woeid)
    const resData2 = await res2.json();

    getWeather(resData2.consolidated_weather);
}

function getWeather(array) {
    const main = document.getElementById("main")

    array.forEach(data => {
        const temp = document.createElement("div");
        temp.classList.add("flex flex-row")

        temp.innerText = fixedDecimal(data.the_temp);

        main.appendChild(temp)
    });
}

function fixedDecimal(num) {
    return num.toFixed(1)
}
// getLocation("London")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = search.value;

    if (location) {
        getLocation(location);
        search.value = ""
    }
})