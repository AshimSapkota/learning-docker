const express = require("express");

const app= express();

app.get("/",(req,res) =>{
  res.send("helloooooo world");
});

app.listen(4000,() =>{
  console.log("tcp server established")}
);