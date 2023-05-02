function printHello() {
  console.log("HELLO WORLD");
}
printHello();

const http = require("http");
const port = 3000;
const fs = require("fs");
const server = http.createServer((req, res) => {
  fs.writeFile("welcome.txt", "Hello Node", (error) => {
    error ? console.log(error) : console.log("file created ");
  });
  fs.readFile("welcome.txt", "utf8", (error, data) => {
    error ? console.log(error) : console.log(data);
  });

  res.write("<h1>Hello Node!!!!</h1>\n");
  res.end();
});

server.listen(port, (error) => {
  error ? console.log(error) : console.log(port);
});
