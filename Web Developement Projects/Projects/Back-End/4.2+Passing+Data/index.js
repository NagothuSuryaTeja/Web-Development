import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var fName = req.body["fName"].length;
  var lName = req.body["lName"].length;
  res.render("index.ejs",{heading:fName+lName});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
