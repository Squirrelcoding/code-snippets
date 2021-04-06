var axios = require("axios");

//Function to make GET requests quicker
function axiosTest(options) {
  const promise = axios.request(options).then(response => response.data)
  return promise
}


var options = {
  method: 'GET',
  url: 'https://poopjokes.apis.softsquirrel.tk/random?key=<your-key>'
};
axiosTest(options).then(data => {
	console.log(data)
})
