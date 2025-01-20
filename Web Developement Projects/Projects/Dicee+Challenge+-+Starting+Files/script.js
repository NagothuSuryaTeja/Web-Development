var ranPic1=Math.floor(Math.random()*6+1);
var ranPic2=Math.floor(Math.random()*6+1);
console.log(ranPic1);
function imgDisplay(pic,class_name)
{
    if(pic==1)
        {
            document.querySelector(class_name).setAttribute("src","./images/dice1.png");
        }
        else if(pic==2)
            {
                document.querySelector(class_name).setAttribute("src","./images/dice2.png");
            }
        else if(pic==3)
            {
                document.querySelector(class_name).setAttribute("src","./images/dice3.png");
            }
        else if(pic==4)
            {
                document.querySelector(class_name).setAttribute("src","./images/dice4.png");
            }
        else if(pic==5)
            {
                document.querySelector(class_name).setAttribute("src","./images/dice5.png");
            }
        else if(pic==6)
            {
                document.querySelector(class_name).setAttribute("src","./images/dice6.png");
            }
        else{
            alert(`wrong with ${class_name}`);
        }
}
imgDisplay(ranPic1,".img1");
imgDisplay(ranPic2,".img2");
if(ranPic1>ranPic2)
{
     // player1 won
     document.querySelector("h1").textContent="🚩Player1 wins!";

}
else if(ranPic2>ranPic1)
{
   // player2 won
   document.querySelector("h1").textContent="Player2 wins!🚩";
}
else
{
    // tie
     document.querySelector("h1").textContent="Draw";
}
