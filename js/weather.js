//#8.0 Geolocation 
/**
 * navigator.geolocation.getCurrentPosition(sucessful, error);
 */
//#8.1 Weather API
/**
 * JSON Viewer 구글 확장 프로그램 
 */

const API_KEY = "0f3ead24f6965057a53e805bd8f42ec1";

function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(                  => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });             //javascript가 대신 url을 부른다.
}

function onGeoError () { 
    console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);