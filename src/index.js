const envs = require('./config/config')
const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage


app.listen(envs.port, () => {
  console.log(`The server is online on port: ${envs.port}`)
})