const HTTPModule = require("http");
const port = 3333;
var HTTPServer = HTTPModule.createServer();
HTTPServer.on("request", (request, response) => {
  console.log("Request received");
  var url = request.url;
  console.log(url);
  console.log(request.method);
  var products = [
    { name: "mohamed", age: 25 },
    { name: "ahmed", age: 30 },
  ];
  switch (url) {
    case "/":
      response.writeHead(302, {
        Location: "/home",
      });
      break;
    case "/home":
      response.writeHead(200);
      response.write("Hello Clint This Home Page");
      break;
    case "/about":
      response.writeHead(200);
      response.write("Hello Clint This is about Page");
      break;
    case "/contact":
      response.writeHead(200);
      response.write("Hello Clint This is contact Page");
      break;
    case "/products":
      response.write(JSON.stringify(products));
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
