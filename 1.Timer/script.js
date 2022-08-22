const timerMonth = document.querySelector(".timerMO")
const timerDay = document.querySelector(".timerD")
const timerHour = document.querySelector(".timerH")
const timerMin = document.querySelector(".timerM")
const timerSec = document.querySelector(".timerS")

const startDate = "15 Jan 2022";

function count(){
    const start = new Date(startDate);
    const currentDate = new Date();

    const mseconds = (currentDate - start) / 1000;
    const days = Math.floor(mseconds / 3600 /24) % 30;
    const hours = Math.floor(mseconds / 3600) % 24;
    const minutes = Math.floor(mseconds / 60) % 60;
    const seconds = Math.floor(mseconds) % 60;
    const months = Math.floor(mseconds / 3600 / 24 / 30);
    
    timerMonth.textContent = formatTime(months);
    timerDay.textContent = formatTime(days);
    timerHour.textContent = formatTime(hours);
    timerMin.textContent = formatTime(minutes);
    timerSec.textContent = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

count()
setInterval(count,1000)


