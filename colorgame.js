var colors = ["rgb(255, 0, 0)",
				"rgb(255, 255, 0)",
				"rgb(0, 255, 0)",
				"rgb(255, 0, 0)",
				"rgb(0, 255, 255)",
				"rgb(255, 0, 255)",]

var squares = document.querySelectorAll(".square");

for(var i = 0;i<=squares.length-2;i++){
	console.log(i);
	squares[i].style.backgroundColor = colors[i];
}