'use strict';

let randnum = Math.trunc(Math.random() * 20) + 1
document.querySelector(".check").addEventListener('click', () => {
    const guess = Number(document.querySelector(".guess").value)
    if (!guess) {
        document.querySelector(".message").textContent = "Please enter a value"
    } else if (Number(document.querySelector(".score").textContent) > 1) {
        if (guess > randnum) {
            document.querySelector(".message").textContent = "Too high try again"
            document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1
        } else if (guess < randnum) {
            document.querySelector(".message").textContent = "Too low try again"
            document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1
        } else {
            document.querySelector(".message").textContent = "Correct well done!";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = guess

            if (document.querySelector(".highscore").textContent < document.querySelector(".score").textContent) {
                document.querySelector(".highscore").textContent = document.querySelector(".score").textContent
            }
        }
    } else {
        document.querySelector(".message").textContent = "Wow you are bad, you lost "
        document.querySelector("body").style.backgroundColor = "red";
    }

})

document.querySelector(".again").addEventListener('click', () => {
    document.querySelector(".message").textContent = "Start guessing..."
    randnum = Math.trunc(Math.random() * 20) + 1
    document.querySelector(".score").textContent = 20
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?"
})