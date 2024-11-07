const port = 10
const express = require("express");
const ServerCode = express();
const BodyParser = require("body-parser")
ServerCode.use(BodyParser.json())

ServerCode.listen(port,function() {
    console.log('http://localhost:'+port+'/')
})

ServerCode.post("/",function(req,resp) {
    console.log(req.body.Message)
    resp.status(200);
    resp.send();
  })