$(document).ready(function(){
var selected=false;
var colorsArray=["red","yellow","green","blue"];
var userInputArray=[];
var computerInputArray=[];
var level=0;
$(document).keypress(function(){
  if(!selected)
  {
    $("h1").text("Level"+level);
    selected=true;
    ComputerInputFunction();
  }
});
function userInputFunction(btnColor)
{
  $("."+btnColor).click(function(){
    buttonColor= $("."+btnColor).attr("id");
    userInputArray.push(buttonColor);
    playSound(buttonColor);
    buttonAnimation(buttonColor);
  });
}
function ComputerInputFunction()
{
  level++;
  var randomNumber=Math.floor(Math.random()*4);
  var randomColor=colorsArray[randomNumber];
  computerInputArray.push(randomColor);
  playSound(randomColor);
  buttonAnimation(randomColor);
}
function playSound(colorName)
{
  var colorSound = new Audio("./sounds/"+colorName+".mp3");
  colorSound.play();
}
function buttonAnimation(colorId)
{
  $("#"+colorId).addClass("pressed");
setTimeout(function(){
    $("#"+colorId).removeClass("pressed");
  },100);
}
























});