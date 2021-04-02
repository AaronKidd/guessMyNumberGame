'use strict';
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = "TEST"
// // document.querySelector(".number").textContent = 25
// // document.querySelector(".score").textContent = 1

// function logbutton() {
//     test = document.querySelector(".guess").value
//     console.log(test)
// }

let randnum = Math.trunc(Math.random() * 20) + 1
document.querySelector(".check").addEventListener('click', () => {
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess)
    if (!guess) {
        document.querySelector(".message").textContent = "Please enter a value"
    } else if (guess > randnum) {
        document.querySelector(".message").textContent = "Too high try again"
        document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1
    } else if (guess < randnum) {
        document.querySelector(".message").textContent = "Too low try again"
        document.querySelector(".score").textContent = Number(document.querySelector(".score").textContent) - 1
    } else {
        document.querySelector(".message").textContent = "Correct well done!"
        if (document.querySelector(".highscore").textContent < document.querySelector(".score").textContent) {
            document.querySelector(".highscore").textContent = document.querySelector(".score").textContent
        }
    }
})

document.querySelector(".again").addEventListener('click', () => {
    document.querySelector(".message").textContent = "Start guessing..."
    randnum = Math.trunc(Math.random() * 20) + 1
    document.querySelector(".score").textContent = 20
})