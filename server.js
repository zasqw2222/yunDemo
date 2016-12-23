'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
let app = express();


app.use(express.static(__dirname + '/dist'));


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})



app.listen(port)
console.log("server started on port " + port)