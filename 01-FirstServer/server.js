// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORTA = 7000;
var PORTB = 7500;

// Here we create a generic function to handle requests and responses
function handleRequestA(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You are the best!: " + request.url);
}


// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var serverA = http.createServer(handleRequestA);

// Here we start our server so that it can begin listening to client requests.
serverA.listen(PORTA, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORTA);

});

function handleRequestB(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You are the worst!: " + request.url);
}

var serverB = http.createServer(handleRequestB);

serverB.listen(PORTB, function(){
	console.log("Server listening on: http://localhost:%s", PORTB);
});