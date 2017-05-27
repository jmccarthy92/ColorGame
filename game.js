
// when i get time i would refactor this into one object nad runn
// game.init();
var game = {};

game.init = function() {
	addButtonListeners();
	addSquareListeners();
	reset();
}

var numberOfSquares = 9;

var colors =[];

var buttons = document.querySelectorAll(".selected");
var easyBtn = document.querySelectorAll(".selected")[0];
var mediumBtn = document.querySelectorAll(".selected")[1];
var hardBtn = document.querySelectorAll(".selected")[2];

var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("randomColor");

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

var pickedColor; //= pickColor();

var resetButton = document.querySelector("#reset");

init();

function init() {
	addButtonListeners();
	addSquareListeners();
	reset();

}


easyBtn.classList.remove("selected");
mediumBtn.classList.remove("selected");

function addButtonListeners(){

	for( var i = 0; i< buttons.length; i++)
	{
		buttons[i].addEventListener("click", function() {

		easyBtn.classList.remove("selected");
		mediumBtn.classList.remove("selected");
		hardBtn.classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numberOfSquares = 3 : this.textContent === "Medium" ? numberOfSquares = 6 : numberOfSquares = 9;
		reset();
		});
	}
}


function reset() {
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for( var i = 0; i < squares.length; i++)
	{
		if( colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "rgba(124, 204, 204, 0.8";


}


resetButton.addEventListener("click", function() {

	 reset();

})

colorDisplay.textContent = pickedColor;

function correctColors(colorIn) {
	for(var j=0; j < squares.length; j++)
	{
		squares[j].style.backgroundColor = colorIn;
	}
}

function addSquareListeners()
{
	for( var i =0; i < squares.length; i++)
	{
	//backgroundColor is more compatible with browsers than backgroundsa
		squares[i].addEventListener("click", function() {
		// grab color of picked square and compare i t too picked coloor
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				correctColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
			} 
			else
			{
				messageDisplay.innerHTML = "Try Again";
				this.style.backgroundColor = "#242424"
			}
		});
		reset();
		//squares[i].style.backgroundColor = colors[i];
	}

}


function pickColor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColors(num) {
	var arr = [];
	
	for( var i = 0; i < num ; i++)
	{
		arr[i] = randomizedColor();
	}

	return arr;
}

function randomizedColor() {

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", " + g +", " + b+")";
}



// un used slash refactored code
// easyBtn.addEventListener("click", function() {
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "rgba(124, 204, 204, 0.8";
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	mediumBtn.classList.remove("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for( var i =0; i < squares.length; i++)
// 	{
// 		//if there is a next color
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}

// });

// hardBtn.addEventListener("click", function() {
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "rgba(124, 204, 204, 0.8";
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	mediumBtn.classList.remove("selected");
// 	numberOfSquares = 9;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for( var i =0; i < squares.length; i++)
// 	{
// 		//if there is a next color
// 			squares[i].style.display = "block";
// 			squares[i].style.background = colors[i];
// 	}
	
// });

// mediumBtn.addEventListener("click", function() {
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "rgba(124, 204, 204, 0.8";
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for( var i =0; i < squares.length; i++)
// 	{
// 		//if there is a next color
// 		if(colors[i]){
// 			squares[i].style.display = "block";
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
	
	
// });


	// messageDisplay.textContent = "";
	// this.textContent = "New Colors"
	// colors = generateRandomColors(numberOfSquares);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;

	// for( var i = 0; i < squares.length; i++)
	// {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	
	// h1.style.backgroundColor = "rgba(124, 204, 204, 0.8";


	// generateRandomColors(numberOfSquares); //["rgb(255, 0, 0)", 
// 			"rgb(0, 255, 0)", 
// 			"rgb(0, 0, 255)", 
// 			"rgb(255, 255, 0)", 
// 			"rgb(255, 0, 255)",  
// 			"rgb(0, 255, 255)", 
// 			"rgb(255, 255, 255)", 
// 			"rgb(255, 0, 255)", 
// 			"rgb(0, 0, 0)" ];