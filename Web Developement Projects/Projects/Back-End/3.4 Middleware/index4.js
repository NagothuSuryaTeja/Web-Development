import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended: true }));
app.post("/submit",(req,res)=>{
  console.log(req.body.street);
  var street = req.body.street;
  var pet = req.body.pet;
  var bandName = street+pet;
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
