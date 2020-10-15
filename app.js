let userScore = 0;
let computerScore = 0;
// Targeting and fetching elements from HTML DOM
const userScore_span =  document.getElementById("user-score");
const computerScore_span =  document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const choices_div = document.querySelector(".choices");
const reset_div = document.querySelector(".reset");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Getting computer Choice
function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// Converting to Words
function convertToWord(letter){
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	return "Scissors";
}

// Checking Score
function check(){
	if(userScore == 5){
		choices_div.classList.add('block');
		result_p.innerHTML = `User reached 5!! USER WINS🎉🎉🎉`;
		reset_div.classList.remove('reset');
		reset_div.classList.add('show');
	}
	if(computerScore == 5){
		choices_div.classList.add('block');
		result_p.innerHTML = `Computer reached 5!! USER LOSES😒🥵💔`;
		reset_div.classList.remove('reset');
		reset_div.classList.add('show');
	}
}

// Getting result for winning
function win(userChoice, computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} ,You win.🎉`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
	check();
}

// Getting result for losing
function lose(userChoice, computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} ,You lost...🥵`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
	check();
}

function draw(userChoice, computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} ,Its a draw..👀`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

// Driver Function
function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

// Main Function
function main(){
	rock_div.addEventListener("click", function(){
		game("r");	
	});

	paper_div.addEventListener("click", function(){
		game("p");
	});

	scissors_div.addEventListener("click", function(){
		game("s");
	});
}

main();
