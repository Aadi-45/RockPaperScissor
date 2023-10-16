
const yourScore = document.getElementById('yourScore');
const pcScore = document.getElementById('pcScore');
yourScore.innerHTML = localStorage.getItem('you') || 0;
pcScore.innerHTML = localStorage.getItem('pc') || 0;

let myChoice, pcChoice, winner;

const playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', () => {
    location.reload();
})

const choices = ['rock', 'paper', 'scissor'];
const getPCChoice = () => {
    const num = Math.floor(Math.random() * 3);
    const pc = choices[num];

    if (pc == 'rock') {

        pcIcon.src = './images/rock.png';
        pcIcon.style.borderColor = '#0074B6';

    } else if (pc == 'paper') {

        pcIcon.src = './images/paper.png';
        pcIcon.style.borderColor = '#FFA943'

    } else {

        pcIcon.src = './images/scissor.png';
        pcIcon.style.borderColor = '#BD00FF';

    }

    return pc;
}


const gameBox = document.getElementById('gameCard');
const playBox = document.getElementById('playBox');

const myIcon = document.getElementById('user');
const pcIcon = document.getElementById('pc');
const result = document.getElementById('result');


const nextButton = document.getElementById('next');
const againstPC = document.getElementById('againstPC');


const getWinner = (myChoice) => {

    gameBox.style.display = 'none';
    playBox.style.display = 'flex';

    pcChoice = getPCChoice();

    if (myChoice == 'rock') {

        myIcon.src = './images/rock.png'
        myIcon.style.borderColor = '#0074B6';

        if (pcChoice == 'scissor') {
            winner = 'user';
        } else if (pcChoice == 'paper') {
            winner = 'pc';
        } else if (pcChoice == 'rock') {
            winner = 'tie';
        }


    } else if (myChoice == 'scissor') {

        myIcon.src = './images/scissor.png'
        myIcon.style.borderColor = '#BD00FF';

        if (pcChoice == 'paper') {
            winner = 'user';
        } else if (pcChoice == 'rock') {
            winner = 'pc';
        } else if (pcChoice == 'scissor') {
            winner = 'tie';
        }

    } else if (myChoice == 'paper') {

        myIcon.src = './images/paper.png'
        myIcon.style.borderColor = '#FFA943'

        if (pcChoice == 'rock') {
            winner = 'user';
        } else if (pcChoice == 'scissor') {
            winner = 'pc';
        } else if (pcChoice == 'paper') {
            winner = 'tie';
        }

    }


    if (winner == 'user') {

        result.innerHTML = 'You Win';

        nextButton.style.display = 'inline-block';

       //add score to player
        if (localStorage.getItem("you")) {
            localStorage.setItem("you", parseInt(localStorage.getItem("you")) + 1)
        } else {
            localStorage.setItem("you", parseInt(localStorage.getItem("you")) || 0 + 1)
        }


    } else if (winner == 'pc') {


        result.innerHTML = 'You Lost';

        // add score to pc
        if (localStorage.getItem("pc")) {
            localStorage.setItem("pc", parseInt(localStorage.getItem("pc")) + 1)
        } else {
            localStorage.setItem("pc", parseInt(localStorage.getItem("pc")) || 0 + 1)
        }



    } else if (winner == 'tie') {

        result.innerHTML = 'Tie Up';
        againstPC.innerHTML = "";

    }

    yourScore.innerHTML = localStorage.getItem('you') || 0;
    pcScore.innerHTML = localStorage.getItem('pc') || 0;
 

    return winner;
}


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');




rock.addEventListener('click', () => {
    myChoice = 'rock';
    getWinner(myChoice);


})
paper.addEventListener('click', () => {
    myChoice = 'paper';
    getWinner(myChoice);

})
scissor.addEventListener('click', () => {
    myChoice = 'scissor';
    getWinner(myChoice);

})

const rulesButton = document.getElementById('rulesButton');
const rulesBox = document.getElementById('rulesBox');
const closeIcon = document.getElementById('closeIcon');


rulesButton.addEventListener('click', () => {
    if (rulesBox.style.display == 'none') {
        rulesBox.style.display = 'block';
    } else {
        rulesBox.style.display = 'none';
    }
})

closeIcon.addEventListener('click', () => {
    rulesBox.style.display = 'none';
})

