//TODO: DEPENDENCIES

const path = require('path');
const express = require('express');
const app = express(); 
const logger = require("morgan");
const cors = require("cors");

//TODO: CONFIGURATION

app.use(logger("dev"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cors())


const port = process.env.PORT || 3000;

app.get("/test", (req, res) => {
    return res.send("It's good to go!");
  });
  
  app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(path.resolve(__dirname,".."), 'client','build')))
    res.sendFile(path.resolve(path.resolve(__dirname,".."),'client','build','index.html'))
  })
  
  app.listen(port, () => console.log(`Server Running on port ${port}`));
  module.exports = app;