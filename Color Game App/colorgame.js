var numSquares = 6;
var colors = [];
var pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
//get all elements that have the square class
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	//generate colors
	reset();

};

function setUpModeButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		//remove both "selected" classes initially just to be safe
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");

		//add selected class to the mode that was clicked on
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
	}
}

function setUpSquares(){
	//loop through them and updates squares with the values from the colors array
for(var i = 0; i < squares.length; i++){
	//add event listeners
	squares[i].addEventListener("click", function(){
		//get color of clikced square
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		//compare
	});
}
}


function reset() {
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors?";
	messageDisplay.textContent = "";
	//change colors in squares to match those in colors array
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			//make blocks visible first before we want to hide them so that this works when the user 
			//clicks hard mode.
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			//hide squares if numSquares = 3 for easy mode
			squares[i].style.display = "none";
		}
	}
	//reset background
	h1.style.backgroundColor = "steelblue";
}



resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	//loop through all squares and change color to correct color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];

	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var red = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var green = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var blue = Math.floor(Math.random() * 256);

	//must always include spaces here for DOM to know the format
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}


/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	//generate random colors
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change display of new picked color
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		//if there is a next color
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	//generate random colors
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change display of new picked color
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});
*/