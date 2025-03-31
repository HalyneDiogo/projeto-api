import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Minha primeira API");
});

server.listen(3333);
