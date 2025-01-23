$(document).ready(function()
{
    var started=true;
    var level =1;
    var colors=["red","blue","green","yellow"];
    var computerInput=[];
    var userInput=[];
    $(document).on("keypress",function(event)
    {
        if(started)
        {
            started=false;
            $("h1").text("level "+level);
            alert("game started");
        }
        
    });
    
    function pcInputSequence()
    {
        var index=Math.floor(Math.random()*4);
        var randomColor=colors[index];
        computerInput.push(randomColor);
    }
    function userSequence()
    {
        $(".btn").on("click",function(){
            var btnColor= this.innerHTML;
            switch(btnColor)
            {
                case ".red" :
                    var redAudio = new Audio("./sounds/red.mp3");
                    redAudio.play();
                    userInput.push("red");

            }
        });
    }
});