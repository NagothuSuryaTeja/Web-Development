import express from "express";
import axios from "axios";
const app = express();
const port=3000;
app.get("/", async (req,res) => {
    const response = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");
    console.log(response.data);
    
}); 
app.listen(port,()=>{
console.log("server is started");
});