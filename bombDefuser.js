let userInputEle = document.getElementById("defuser");
let timerPEle = document.getElementById("timer");
let counter = 10;


let uniqueId = setInterval(function() {
    timerPEle.textContent = counter;
    counter = counter - 1;
    if (counter === 0) {
        timerPEle.textContent = "BOOM";
        clearInterval(uniqueId);
    }
}, 1000);

function apply(event) {
    if (event.key === "Enter") {
        let userText = userInputEle.value;
        if ((userText === "defuse") && (counter > 0)) {
            timerPEle.textContent = "You did it!";
            clearInterval(uniqueId);
        }

    }
}


userInputEle.addEventListener("keydown", apply);