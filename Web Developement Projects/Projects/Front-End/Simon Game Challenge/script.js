$(document).ready(function(){
var selected=false;
var colorsArray=["red","yellow","green","blue"];
var userInputArray=[];
var computerInputArray=[];
var level=0;
$(document).keypress(function(){
  if(!selected)
  {
    $("#level-title").text(" Level "+ level );
    ComputerInputFunction();
    selected=true;
  }
});

$(".btn").click(function(){
  var buttonColor= $(this).attr("id");
  userInputArray.push(buttonColor);
  playSound(buttonColor);
  buttonAnimation(buttonColor);
  checkAnswer(userInputArray.length-1);
});

function checkAnswer(currentLevel){
  if(computerInputArray[currentLevel]===userInputArray[currentLevel])
  {
   if(userInputArray.length===computerInputArray.length){
    setTimeout(function()
    {
      ComputerInputFunction();
    },100);
   } 
  }
    else{
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },100);
      startOver();
  }
  
}
function ComputerInputFunction()
{
  userInputArray=[];
  level++;
  $("#level-title").text(" Level "+ level );
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
function startOver()
{
  started=false;
  level=0
  computerInputArray=[];
}
});