import express from "express";

const app = express();
const port = 3000;

app.use(logger);

app.get("/home", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
function logger(req,res,next)
{
  console.log("Request method : "+req.method );
  console.log("requested Url is :"+ req.url);
  next();
}
