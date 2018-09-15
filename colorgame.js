var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var pickedColor = null;
var resetButton = document.querySelector("#reset");


setup();


function randomColorGenerator(){
	var rNum = Math.floor(Math.random() * 255 + 1);
	var gNum = Math.floor(Math.random() * 255 + 1);
	var bNum = Math.floor(Math.random() * 255 + 1);
	return "rgb("+rNum+", "+gNum+", "+bNum+")";
}


resetButton.addEventListener("click",function(){
	//generate all new colors;
	//pick a random colors from array;
	//change colors of squares;
	colors = [];
	setup();
	h1.style.backgroundColor = "";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
});




/*for(var i = 0;i<=squares.length-1;i++){
	//add randomColors
	var randomColor =  randomColorGenerator();
	squares[i].style.backgroundColor = randomColor;
	colors.push(randomColor);

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of the clicked square
		//compare with the picked color
		var clickedColor = this.style.backgroundColor;
		if(clickedColor == pickedColor){
			messageDisplay.textContent = "correct";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;

		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

pickedColor = pickColor();*/


function setup(){
	for(var i = 0;i<=squares.length-1;i++){
	//add randomColors
	var randomColor =  randomColorGenerator();
	squares[i].style.backgroundColor = randomColor;
	colors.push(randomColor);

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of the clicked square
		//compare with the picked color
			var clickedColor = this.style.backgroundColor;
			if(clickedColor == pickedColor){
				messageDisplay.textContent = "correct";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";

			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
}

function changeColor(color){
	//loop through all the squares
	for(var i=0;i<=squares.length-1;i++){
		//change the each color to given color
		squares[i].style.backgroundColor = color;
	}	
}

function pickColor(){
	var randomIndex = Math.floor(Math.random()*colors.length);
	return colors[randomIndex];
}

