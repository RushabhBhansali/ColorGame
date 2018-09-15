var colors = [];

function randomColorGenerator(){
	var rNum = Math.floor(Math.random() * 255 + 1);
	var gNum = Math.floor(Math.random() * 255 + 1);
	var bNum = Math.floor(Math.random() * 255 + 1);
	return "rgb("+rNum+", "+gNum+", "+bNum+")";
}

var squares = document.querySelectorAll(".square");
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

//toDO

var pickedColor = null;


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
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

pickedColor = pickColor();


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

colorDisplay.textContent = pickedColor;