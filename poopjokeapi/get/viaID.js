var axios = require("axios");

function axiosTest(options) {
  const promise = axios.request(options).then(response => response.data)
  return promise
}


var options = {
  method: 'GET',
  url: 'https://poopjokes.apis.softsquirrel.tk/byID?key=<your-key>&id=<joke-id>'
};
axiosTest(options).then(data => {
	console.log(data)
})
