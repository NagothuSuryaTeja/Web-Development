var colors=["red","green","blue","yellow"];
var pcGamePattern=[];
var userGamePattern=[];
$(document).ready(function(){
   
    $(".red").on("click",function()
    { 
        var redaudio= new Audio("./sounds/red.mp3");
        redaudio.play();
        userGamePattern.push("red");
    });
    $(".blue").on("click",function()
    { 
        var redaudio= new Audio("./sounds/blue.mp3");
        redaudio.play();
        userGamePattern.push("bule");
    });
    $(".yellow").on("click",function()
    { 
        var redaudio= new Audio("./sounds/yellow.mp3");
        redaudio.play();
        userGamePattern.push("yellow");
    });
    $(".green").on("click",function()
    { 

        var redaudio= new Audio("./sounds/green.mp3");
        redaudio.play();
        userGamePattern.push("green");
    });

    function nextSequences(){
        var index=Math.floor(Math.random()*3);
        var color=colors[index];
        pcGamePattern.push(color);
        switch(color)
        {
            case "red":
                var redaudio= new Audio("./sounds/red.mp3");
                redaudio.play();
            case "blue":
                var redaudio= new Audio("./sounds/blue.mp3");
                redaudio.play();
            case "yellow":    
                var redaudio= new Audio("./sounds/yellow.mp3");
                redaudio.play();
            case "green":
                var redaudio= new Audio("./sounds/green.mp3");
                redaudio.play();
            
        }
    }
    function validation()
    {
        res = pcGamePattern.join() == userGamePattern.join();
        return res;
    }
    $(document).on("click",function()
    {
        var val=1;
        $("h1").text("Level "+val);
        nextSequences();
        valid=validation();
        if(valid)
            {
                alert(val++);
            } 
            else{
               alert(val=0); 
            }       
    });
    











    
}); 