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
    console.log(playerSelection)
    console.log(computerSelection)
    if(playerSelection === computerSelection){
        resultString = "Nobody won this round, try again !";
    }
    else if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        resultString = "You win this round, congratulations !";
    }
    else{
        resultString = "You lose this round ...";
    }

    console.log(resultString)

    /*const body = document.querySelector('body');
    const div = document.createElement('div');
    div.textContent = resultString;
    body.appendChild(div);*/

    const resultat=document.querySelector('.resultat');
    resultat.textContent=resultString;

    return resultString;
}

function rockScore(playerScore, computerScore){
    
    let result = playRound('rock', computerPlay());

    if(result === 'You win this round, congratulations !'){
        playerScore = playerScore + 1;
    }
    else if(result === 'You lose this round ...'){
        computerScore = computerScore + 1;
    }

    console.log(playerScore, computerScore);

    if(playerScore === 5){
        console.log('Player won the game:)');
        playerScore = 0;
        computerScore = 0;
        const resultat=document.querySelector('.resultat');
        resultat.textContent='Player won the game:)';
    }
    if(computerScore === 5){
        console.log(('Computer won the game :/'));
        playerScore = 0;
        computerScore = 0;
        const resultat=document.querySelector('.resultat');
        resultat.textContent='Computer won the game :/';
    }

    return [playerScore, computerScore];
}

function paperScore(playerScore, computerScore){

    let result = playRound('paper', computerPlay());

    if(result === 'You win this round, congratulations !'){
        playerScore = playerScore + 1;
    }
    else if(result === 'You lose this round ...'){
        computerScore = computerScore + 1;
    }

    console.log(playerScore, computerScore);

    if(playerScore === 5){
        console.log('Player won the game:)');
        playerScore = 0;
        computerScore = 0;
        const resultat=document.querySelector('.resultat');
        resultat.textContent='Player won the game:)';
    }
    if(computerScore === 5){
        console.log(('Computer won the game :/'));
        playerScore = 0;
        computerScore = 0;
        const resultat=document.querySelector('.resultat');
        resultat.textContent='Computer won the game :/';
    }

    return [playerScore, computerScore];
    
}

function scissorsScore(playerScore, computerScore){
    
    let result = playRound('paper', computerPlay());

    if(result === 'You win this round, congratulations !'){
        playerScore = playerScore + 1;
    }
    else if(result === 'You lose this round ...'){
        computerScore = computerScore + 1;
    }

    console.log(playerScore, computerScore);

    if(playerScore === 5){
        console.log('Player won the game:)');
        playerScore = 0;
        computerScore = 0;
        const resultat=document.querySelector('.resultat');
        resultat.textContent='Player won the game:)';
    }
    if(computerScore === 5){
        console.log(('Computer won the game :/'));
        playerScore = 0;
        computerScore = 0;
        const resultat=document.querySelector('.resultat');
        resultat.textContent='Computer won the game :/';
    }

    return [playerScore, computerScore];

}

function playGame(){

    let playerScore = 0;
    let computerScore = 0;

    document.querySelectorAll('.rockButton').forEach(item => {
        item.addEventListener('click', function() {[playerScore, computerScore] = rockScore(playerScore, computerScore);}); 
    });

    document.querySelectorAll('.paperButton').forEach(item => {
        item.addEventListener('click', function() {[playerScore, computerScore] = paperScore(playerScore, computerScore);}); 
    });

    document.querySelectorAll('.scissorsButton').forEach(item => {
        item.addEventListener('click', function() {[playerScore, computerScore] = scissorsScore(playerScore, computerScore);}); 
    });       
}

playGame();

/*
let computerScore = 0;

const rockButton = document.querySelector('.rockButton');
rockButton.addEventListener('click', function() {playRound('rock', computerPlay());});

rockButton.addEventListener('click', () => {computerScore = computerScore + 1;});

const paperButton = document.querySelector('.paperButton')
paperButton.addEventListener('click', function() {playRound('paper', computerPlay());});

const scissorsButton = document.querySelector('.scissorsButton')
scissorsButton.addEventListener('click', function() {playRound('scissors', computerPlay());});*/