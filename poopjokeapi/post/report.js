var axios = require("axios");

axios({
  method: 'post',
  url: 'https://poopjokes.apis.softsquirrel.tk/reportJoke?key=<your-key>',
  data: {
    id: <Poop joke ID here>,
    reason: "Your report here"
  }
})
