import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "suryteha";
const yourPassword = "ILoveYou";
const yourAPIKey = "8a14ae25-9db1-4d0b-a2cf-fc08b8e07fc3";
const yourBearerToken = "d9f17739-33a2-4399-9a01-1126c739a847";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  const response = await axios.get(API_URL+"/random");
  const responseData = JSON.stringify(response.data);
  console.log(responseData);
  res.render("index.ejs",{content : responseData});
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  const response= await axios.get(API_URL+"/all?page=2", {
      auth: {
        username: "suryteha",
        password: "ILoveYou",
      },
    });
    const responseData = JSON.stringify(response.data);
    console.log(responseData);
    res.render("index.ejs",{content : responseData});

});

app.get("/apiKey", async (req, res) => {
  const response = await axios.get(API_URL+"/filter?score=5&apiKey=8a14ae25-9db1-4d0b-a2cf-fc08b8e07fc3");
  const responseData = JSON.stringify(response.data);
  console.log(responseData);
  res.render("index.ejs",{content : responseData});
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402

  const response = await axios.get(API_URL+"/secrets/42", {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  });
  const responseData = JSON.stringify(response.data);
  console.log(responseData);
  res.render("index.ejs",{content : responseData});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
