let score = 0;
let timer = 60;
let hitRn = 0;
function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 150; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${num}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
    let rtimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else {
            clearInterval(rtimer);
            document.querySelector("#pbtm").innerHTML = `<h1 id="gameover"><a herf=""</h1>`;
        }
    }, 1000);
}
function getNweHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRn;
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
    let clickNumber = Number(details.target.textContent);
    if (clickNumber === hitRn) {
        increaseScore();
        makeBubble();
        getNweHit();
    }
})
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
makeBubble();
runTimer();
getNweHit();

// Jispe Click karoge wo element per event raise hoga aur event listener na milne par event element ke parant par listener dhundhega, Waha bhi na milne par event parent ke parent ke parent par listener dhundhega  