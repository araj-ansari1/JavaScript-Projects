


let selectBox = document.querySelector("#option-box");
let bodyColor = document.querySelector("body");
let cardBox = document.querySelectorAll("#card");
let contantBTN = document.querySelector(".contant-btn");

selectBox.addEventListener("change", function () {
    let value = selectBox.value;

    if (value === "dark") {
        bodyColor.style.background = "black";
        bodyColor.style.color = "white";
        contantBTN.style.background = "#008080";
        contantBTN.style.color = "white";
        cardBox.forEach(function (shadow) {
            shadow.style.boxShadow = "1.5px 2px 10px 3px rgba(248, 244, 244, 1)";
            shadow.style.bordeRadius = "10px"
            shadow.style.color = "black"
        })
    }
    else {
        bodyColor.style.background = value;
        bodyColor.style.color = "black";
        cardBox.forEach(function (shadow) {
            shadow.style.boxShadow = "1.5px 2px 10px 3px rgba(0, 0, 0, 1)";
            shadow.style.bordeRadius = "10px"
            shadow.style.color = "black"
        })
    }
});



