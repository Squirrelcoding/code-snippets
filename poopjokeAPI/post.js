var axios = require("axios");
var express = require('express');
var cors = require('cors')
var app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('views'));
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Function to make things faster
function axiosTest(options) {
  const promise = axios.request(options).then(response => response.data)
  return promise
}


var options = {
  method: 'GET',
  url: 'https://poopjokes.apis.softsquirrel.tk/random?key=example'
};
axiosTest(options).then(data => {
	console.log(data)
})
