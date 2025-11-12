let myName = document.getElementById('name');
let age = document.getElementById('age');
let userName = document.getElementById('user-name');
let gender = document.getElementById('gender');


let image = document.getElementById('image');


let streetEl = document.getElementById('street');
let cityEl = document.getElementById('city');
let countryEl = document.getElementById('country');
let postCodeEl = document.getElementById('postcode');
let coordinateEl = document.getElementById('coordinates');

const refreshInfo = async () => {
    const respose = await fetch(`https://randomuser.me/api/`);
    let data = await respose.json();
    let result = data.results[0];
    myName.innerHTML = `<span class="head-bold">Name :</span>  ${result.name.first + result.name.last
        }`;
    age.innerHTML = `<span class="head-bold">Age :</span> ${result.dob.age
        }`
    userName.innerHTML = `<span class="head-bold">User name :</span> ${result.login.username}`;
    gender.innerHTML = `<span class="head-bold">Gender :</span> ${result.gender}`;



    streetEl.innerHTML = `<span class="head-bold">Street :</span>${result.location.street.number} ${result.location.street.name}`;
    cityEl.innerHTML = `<span class="head-bold">City :</span>${result.location.city}`;
    countryEl.innerHTML = `<span class="head-bold">Country :</span>${result.location.country}`;
    postCodeEl.innerHTML = `<span class="head-bold">PostCode :</span>${result.location.postcode}`;
    coordinateEl.innerHTML = `<span class="head-bold">Location :</span>${result.location.coordinates.latitude + result.location.coordinates.longitude}`;


    image.src = `${result.picture.large}`;
}
refreshInfo();

// console.log(refreshInfo());