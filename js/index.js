let red = true
let score = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const victory = document.getElementById("victory-lbl")
const turn = document.getElementById("turn-lbl")

const btn1 = document.querySelector("#ttt1")
const btn2 = document.querySelector("#ttt2")
const btn3 = document.querySelector("#ttt3")
const btn4 = document.querySelector("#ttt4")
const btn5 = document.querySelector("#ttt5")
const btn6 = document.querySelector("#ttt6")
const btn7 = document.querySelector("#ttt7")
const btn8 = document.querySelector("#ttt8")
const btn9 = document.querySelector("#ttt9")
const allBtn = document.querySelectorAll(".ttt-btn")
const reset = document.getElementById("reset-btn")

function victoryCheck() {
    let v1 = score[0] + score[1] + score[2]
    let v2 = score[3] + score[4] + score[5]
    let v3 = score[6] + score[7] + score[8]
    let v4 = score[2] + score[5] + score[8]
    let v5 = score[0] + score[3] + score[6]
    let v6 = score[0] + score[4] + score[8]
    let v7 = score[2] + score[4] + score[6]
    let v8 = score[0] + score[1] + score[2] + score[3] + score[4] + score[5] + score[6] + score[7] + score[8]

    if (red === true) {
        turn.textContent = "Red players turn!"
    } else {
        turn.textContent = "Blue players turn!"
    }

    if ( v1 === 3 || v2 === 3 || v3 === 3 || v4 === 3 || v5 === 3 || v6 === 3 || v7 === 3 ) {
        victory.textContent = "Red Wins!"
        reset.textContent = "Play Again!"
        allBtn.forEach((e) => {
            e.disabled = true
        })
    }
    if ( v1 === 30 || v2 === 30 || v3 === 30 || v4 === 30 || v5 === 30 || v6 === 30 || v7 === 30 ) {
        victory.textContent = "Blue Wins!"
        reset.textContent = "Play Again!"
        allBtn.forEach((e) => {
            e.disabled = true
        })
    }

    if ( v8 === 45 || v8 === 54 ) {
        victory.textContent = "It's a draw."
        reset.textContent = "Play Again!"
    }
}

reset.addEventListener("click", function() {
    red = true
    score = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    reset.textContent = "Reset Game"
    turn.textContent = "Red players turn!"
    victory.textContent = "Let's Play Tic-Tac-Toe!"

    btn1.style.backgroundColor = "#F0F0F0"
    btn2.style.backgroundColor = "#F0F0F0"
    btn3.style.backgroundColor = "#F0F0F0"
    btn4.style.backgroundColor = "#F0F0F0"
    btn5.style.backgroundColor = "#F0F0F0"
    btn6.style.backgroundColor = "#F0F0F0"
    btn7.style.backgroundColor = "#F0F0F0"
    btn8.style.backgroundColor = "#F0F0F0"
    btn9.style.backgroundColor = "#F0F0F0"

    document.querySelector("#ttt1").disabled = false
    btn1.textContent = ""
    document.querySelector("#ttt2").disabled = false
    btn2.textContent = ""
    document.querySelector("#ttt3").disabled = false
    btn3.textContent = ""
    document.querySelector("#ttt4").disabled = false
    btn4.textContent = ""
    document.querySelector("#ttt5").disabled = false
    btn5.textContent = ""
    document.querySelector("#ttt6").disabled = false
    btn6.textContent = ""
    document.querySelector("#ttt7").disabled = false
    btn7.textContent = ""
    document.querySelector("#ttt8").disabled = false
    btn8.textContent = ""
    document.querySelector("#ttt9").disabled = false
    btn9.textContent = ""
})

btn1.addEventListener("click", function() {
    if (red === true) {
        btn1.textContent = "X"
        score[0] = 1
        btn1.style.backgroundColor = 'salmon';
    } else {
        btn1.textContent = "O"
        score[0] = 10
        btn1.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt1").disabled = true
})

btn2.addEventListener("click", function() {
    if (red === true) {
        btn2.textContent = "X"
        score[1] = 1
        btn2.style.backgroundColor = 'salmon';
    } else {
        btn2.textContent = "O"
        score[1] = 10
        btn2.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt2").disabled = true
})

btn3.addEventListener("click", function() {
    if (red === true) {
        btn3.textContent = "X"
        score[2] = 1
        btn3.style.backgroundColor = 'salmon';
    } else {
        btn3.textContent = "O"
        score[2] = 10
        btn3.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt3").disabled = true
})

btn4.addEventListener("click", function() {
    if (red === true) {
        btn4.textContent = "X"
        score[3] = 1
        btn4.style.backgroundColor = 'salmon';
    } else {
        btn4.textContent = "O"
        score[3] = 10
        btn4.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt4").disabled = true
})

btn5.addEventListener("click", function() {
    if (red === true) {
        btn5.textContent = "X"
        score[4] = 1
        btn5.style.backgroundColor = 'salmon';
    } else {
        btn5.textContent = "O"
        score[4] = 10
        btn5.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt5").disabled = true
})


btn6.addEventListener("click", function() {
    if (red === true) {
        btn6.textContent = "X"
        score[5] = 1
        btn6.style.backgroundColor = 'salmon';
    } else {
        btn6.textContent = "O"
        score[5] = 10
        btn6.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt6").disabled = true
})

btn7.addEventListener("click", function() {
    if (red === true) {
        btn7.textContent = "X"
        score[6] = 1
        btn7.style.backgroundColor = 'salmon';
    } else {
        btn7.textContent = "O"
        score[6] = 10
        btn7.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt7").disabled = true
})

btn8.addEventListener("click", function() {
    if (red === true) {
        btn8.textContent = "X"
        score[7] = 1
        btn8.style.backgroundColor = 'salmon';
    } else {
        btn8.textContent = "O"
        score[7] = 10
        btn8.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt8").disabled = true
})

btn9.addEventListener("click", function() {
    if (red === true) {
        btn9.textContent = "X"
        score[8] = 1
        btn9.style.backgroundColor = 'salmon';
    } else {
        btn9.textContent = "O"
        score[8] = 10
        btn9.style.backgroundColor = "dodgerblue";
    }
    red = !red
    victoryCheck()
    document.querySelector("#ttt9").disabled = true
})