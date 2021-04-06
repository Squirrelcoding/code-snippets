var axios = require("axios");

axios({
  method: 'post',
  url: 'https://poopjokes.apis.softsquirrel.tk/submitJoke?key=<your-key>',
  data: {
    joke: "Your Joke here!"
  }
})
