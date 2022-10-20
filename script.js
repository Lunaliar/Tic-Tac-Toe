//DOM ELEMENTS
const buttons = document.querySelectorAll(".button");
const resetBtn = document.querySelector(".reset");
const switchBtn = document.querySelector(".switch");
const playerOneDisplay = document.querySelector(".player1");
const playerTwoDisplay = document.querySelector(".player2");

//JS VARIABLES
const playerOne = "O";
const playerTwo = "X";

let playerToggle = true;
playerOneDisplay.classList.add("active");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (!button.innerText) {
			if (playerToggle) {
				button.innerText = playerOne;
				playerToggle = !playerToggle;
				playerTwoDisplay.classList.add("active");
				playerOneDisplay.classList.remove("active");
				console.log("O");
			} else {
				button.innerText = playerTwo;
				playerToggle = !playerToggle;
				playerOneDisplay.classList.add("active");
				playerTwoDisplay.classList.remove("active");
				console.log("X");
			}
		}
	});
});

function reset() {
	buttons.forEach((button) => {
		button.innerText = "";
		playerToggle = true;
		playerOneDisplay.classList.add("active");
		playerTwoDisplay.classList.remove("active");
		return console.log("Reset");
	});
}

resetBtn.addEventListener("click", reset);
