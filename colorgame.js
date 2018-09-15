/*var colors = ["rgb(255, 0, 0)",
				"rgb(255, 255, 0)",
				"rgb(0, 255, 0)",
				"rgb(255, 0, 0)",
				"rgb(0, 255, 255)",
				"rgb(255, 0, 255)",]*/

function randomColorGenerator(){
	var rNum = Math.floor(Math.random() * 255 + 1);
	var gNum = Math.floor(Math.random() * 255 + 1);
	var bNum = Math.floor(Math.random() * 255 + 1);
	return "rgb("+rNum+", "+gNum+", "+bNum+")";
}

var squares = document.querySelectorAll(".square");

for(var i = 0;i<=squares.length-2;i++){
	squares[i].style.backgroundColor = randomColorGenerator();
}