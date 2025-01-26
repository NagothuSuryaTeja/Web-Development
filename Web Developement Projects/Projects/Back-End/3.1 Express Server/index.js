import express from "express";
var app = express();
var port = 3000;
app.listen(port,() => {
    console.log(`the server is running at ${port}`);
});
app.get("/",(req,res) =>{
    res.send("hello World!");
});