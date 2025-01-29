import express from "express";
const app = express();
const port=3000;

app.get("/",(req,res)=>
{
    const d = new Date();
    let day = d.getDay();
    let type  = "weekday";
    let adv="Its time to Work hard";  
    if(day==0||day==1)
        {
             type  = "weekend";
             adv="Its time to have sone fun"; 
        } 
    res.render("solution.ejs",{
        dayType:type,
        advice:adv,
    });
});
app.listen(port,()=>{
    console.log("The server is running at "+port);
});