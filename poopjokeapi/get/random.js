var axios = require("axios");
 
//Function to make things faster
function axiosTest(options) {
  const promise = axios.request(options).then(response => response.data)
  return promise
}
 
 
var options = {
  method: 'GET',
  url: 'https://poopjokes.apis.softsquirrel.tk/byID?key=example&id=<JOKE-ID>'
};
axiosTest(options).then(data => {
	console.log(data)
})
