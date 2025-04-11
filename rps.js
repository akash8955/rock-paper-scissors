let userScore = 0;
let compScore = 0;

let you = document.querySelector("#you");
let comp = document.querySelector("#comp");

let msg = document.querySelector("#msg");

let newG = document.querySelector(".btn");


const drawGame = () => {
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#023047";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        you.innerText = userScore;
        msg.innerText = `You Win , your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `You lost ,  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    const randomChoice = ["rock", "paper", "scissors"];
    const compChoice = randomChoice[Math.floor(Math.random() * 3)];
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }



}

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");

        playGame(userChoice);
    })
})

newG.addEventListener("click", () => {
    msg.innerText = "Play Your Moves";
    msg.style.backgroundColor = "#023047";
    you.innerText = "0";
    comp.innerText = "0";
})

