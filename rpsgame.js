function computerPlay(){
    let randresult;
    randresult = Math.floor(Math.random() * 3);
    let wordresult;
    if (randresult === 0){
        wordresult = "Rock";
    }
    else if (randresult === 1){
        wordresult = "Paper";
    }
    else{
        wordresult = "Scissors";
    }

    return wordresult;
}


function caseInsensitive(word){
    let wordFirstLetter = word.slice(0, 1);
    let wordNextLetters = word.slice(1);
    wordFirstLetter = wordFirstLetter.toUpperCase();
    wordNextLetters = wordNextLetters.toLowerCase();
    word = wordFirstLetter + wordNextLetters;
    return word;
}


function playRound(playerSelection, computerSelection){
    playerSelection = caseInsensitive(playerSelection);
    let resultString;

    if(playerSelection === computerSelection){
        resultString = "Nobody won, try again !";
    }
    else if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        resultString = "You win, congratulations !";
    }
    else{
        resultString = "You lose ...";
    }
    return resultString;
}

function game(){
    let winner;
    let roundResult;
    let winningPoint = 0;
    let computerSelection;
    let playerSelection;
    for (let i=0; i<5; i++){
        
        computerSelection = computerPlay();
        playerSelection = prompt("Choisir votre signe entre pierre feuille ciseau :");
        console.log("computer :", computerSelection);
        console.log('player: ', playerSelection);

        roundResult = playRound(playerSelection, computerSelection);
        console.log("for this round:", roundResult);

        if (roundResult === "You win, congratulations !"){
            winningPoint = winningPoint + 1;
        }
        else if (roundResult === "You lose ..."){
            winningPoint = winningPoint - 1;
        }
    }

    if (winningPoint > 0){
        winner = "Player won";
    }

    else if (winningPoint === 0){
        winner = "Nobody won";
    }
    else{
        winner = "Computer won";
    }

    return winner;
}

console.log(game());