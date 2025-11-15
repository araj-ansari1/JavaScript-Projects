let istatus = document.querySelector("h5");

let check = 0;

// Add Friends
let add = document.querySelector("#addFriend");
add.addEventListener('click', function () {
    // istatus.innerHTML = "Friends";
    // istatus.style.color = "green"
    if (check === 0) {
        // istatus.innerHTML = "Add Friends";
        istatus.innerHTML = "Friends";
        istatus.style.color = "green"
        add.innerHTML = "Remove Friend"
        check = 1;

    } else {
        istatus.innerHTML = "Stranger";
        add.innerHTML = "Add Friends"
        check = 0;
    }

})

// Remove Friend
// let remove = document.querySelector("#remove");
// remove.addEventListener('click', function () {
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red"
// })
