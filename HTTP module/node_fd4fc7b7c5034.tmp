const HTTPModule = require("http");
const port = 3333;
var HTTPServer = HTTPModule.createServer();
HTTPServer.on("request", (request, response) => {
  console.log("Request received");
  var url = request.url;
  switch (url) {
    case "/home":
      response.write("Hello Clint This Home Page");
      break;
    case "/about":
      response.write("Hello Clint This is about Page");
      break;
    case "/contact":
      response.write("Hello Clint This is contact Page");
      break;
    default:
      response.writeHead(404);
      break;
  }
  response.end();
});
HTTPServer.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
