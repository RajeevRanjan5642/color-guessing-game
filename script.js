var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
var response = document.querySelector("#response");
var count = 0;

for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Color";
    count=0;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "hotpink";
    response.textContent="So! Let's dive straight into the GAME :)."
} 
resetButton.addEventListener("click",function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    messageDisplay.textContent = "";
    this.textContent = "New Color";
    h1.style.backgroundColor = "hotpink";
    count = 0;
    response.textContent = "So! Let's dive straight into the GAME :)."
})
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    }
    response.textContent = "So! Let's dive straight into the GAME :)."
for(var i = 0; i < squares.length; i++){
    
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare clicked color to picked color
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "CORRECT!!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            response.textContent = "Hurray!! You WON the game in "+(count+1)+" attempt :).";
        }
        else{
            count++;
            this.style.backgroundColor ="black";
            messageDisplay.textContent = "Try Again!!";
            response.textContent = "Winners never quit!!"
        }
    });
}
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
