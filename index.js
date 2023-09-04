const express = require("express");
const app = express();
const cors =  require("cors");

app.use(cors());

const port =process.env.PORT || 3000;
const apidata = require("./data.json");
app.get("/", (req,res)=>{
  res.send("Hello! I am Live");
});

app.listen(port,()=>{
  console.log("I am Live Again !!!");
})

app.get("/service",(req,res)=>{
 res.send(apidata);
})