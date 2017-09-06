const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config=require('./config/database'); // Mongoose Config
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('Connected to database: ' + config.db);
  }
});


app.get('*', (req, res)=>{
  res.send("<h1>hello World</h1>");
});

app.listen(8080,()=>{
  console.log("Listen on port 8080");
});
