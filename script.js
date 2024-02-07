let userWinCount = 0;
let computerWinCount = 0;


function getComputerChoice() {
    let x = Math.floor((Math.random() * 3));
    switch (x) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(userSel, computerSel = getComputerChoice()) {
    let win = `You win, ${userSel} beats ${computerSel}`;
    let lost = `You lost, ${computerSel} beats ${userSel}`;
    let draw = "Draw"

    if (userSel.toUpperCase() === "ROCK") {

        switch (computerSel.toUpperCase()) {
            case "ROCK":
                return draw;
            case "PAPER":
                computerWinCount++;
                return lost;
            case "SCISSORS":
                userWinCount++;
                return win;
        }
    } else if (userSel.toUpperCase() === "PAPER") {

        switch (computerSel.toUpperCase()) {
            case "ROCK":
                userWinCount++;
                return win;
            case "PAPER":
                return draw;
            case "SCISSORS":
                computerWinCount++;
                return lost;
        }
    } else if (userSel.toUpperCase() === "SCISSORS") {
        
        switch (computerSel.toUpperCase()) {
            case "ROCK":
                computerWinCount++;
                return lost;
            case "PAPER":
                userWinCount++;
                return win;
            case "SCISSORS":
                return draw;
        }
    } else {
        return "Invalid value"
    }
}


function playGame() {
    for (let i=0;i<=4;i++) {
        let x = prompt("Choose a value (rock, paper, scissors)");
        document.getElementById('result').innerHTML += playRound(x) + " | ";
        document.getElementById('user').innerHTML = userWinCount;
        document.getElementById('computer').innerHTML = computerWinCount;
        
    }
}



