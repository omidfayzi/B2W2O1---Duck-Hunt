alert("Welkom bij Duckhunt!");

var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");
var buttonTop = document.getElementById("buttonTop");
var buttonBottom = document.getElementById("buttonBottom");

buttonLeft.addEventListener("click", function moveLeft() {
	document.getElementById('DuckGif').style.left = "5px";
})

buttonRight.addEventListener("click", function moveRight() {
	document.getElementById('DuckGif').style.right = "5px";
})

buttonTop.addEventListener("click", function moveUp() {
	document.getElementById('DuckGif').style.top = "5px";
})

buttonBottom.addEventListener("click", function moveDown() {
	document.getElementById('DuckGif').style.bottom = "5px";
})