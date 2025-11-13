const apiKey = 'e60431b2cd4b4f82f0ea7574488182d1';

let input = document.getElementById('input');
const searchBtn = document.getElementById('btn');
let image = document.getElementById('image');
let city = document.getElementById('para');


const description = document.getElementById('description');
const temp = document.getElementById('temp');
const speed = document.getElementById('speed');
const cloud = document.getElementById('clouds');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');

async function weatherApi() {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`)
        let data = await response.json();
        console.log(data);

        city.innerHTML = `<span class="city-span">${data.name},</span> ${data.sys.country}`;

        description.innerHTML = `${data.weather[0].description}`;

        temp.innerHTML = `${(data.main.temp - 273.15).toFixed(2)} <span>&deg;C</span>`;

        speed.innerHTML = `${data.wind.speed} <span>m/s</span>`;

        cloud.innerHTML = `${data.clouds.all} <span>% clouds</span>`;

        humidity.innerHTML = `${data.main.humidity} <span>%</span>`;

        pressure.innerHTML = `${data.main.pressure} <span>hPa</span>`;

        image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


    } catch (error) {
        console.log(error);
    }
}
searchBtn.addEventListener('click', () => {
    weatherApi();
})
