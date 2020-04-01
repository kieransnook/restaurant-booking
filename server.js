var http = require("http");

// Set our port to 3000
var PORT = 3000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.end("It Works!! Path Hit: " + req.url);
}

// Starts our server.
server.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});