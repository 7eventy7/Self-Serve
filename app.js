const express = require("express")
const app = express()
//const fs = require('fs')

app.use(express.json());       // to support JSON-encoded bodies

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.post('/', function (req, res) {
  //var factory = req.body.factory;
  //console.log("factory="+factory)
  console.log(req.body)
  if (req.body.new=="true") {
    res.send('helo');
  } else {
    res.send('sorry');
  }
  
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));