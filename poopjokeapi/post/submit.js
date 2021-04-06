var axios = require("axios");

axios({ 
	method: 'post',
  url: 'https://Poop-Joke-API.squirrel777.repl.co/reportJoke?key=<your-key>',
	data: {
		id: <Joke ID>,
		reason: "your reason here"
	}
})
