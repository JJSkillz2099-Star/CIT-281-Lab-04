// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});
// Type in localhost:8080 to get "Hello from Lab 4!"
// Type in localhost:8080/name to get "Hello Guest"
// Type in localhost;8080/name?first=Jared&last=Skilowitz
fastify.get("/name", (request, reply) => {
    const { first, last } = request.query;
    if(first && last) {
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h1>Hello, ${first} ${last}</h1>`);
    }
    else {
    const name = "Guest";
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h1>Hello ${name}</h1>`);
    }
  });
// Start server and listen to requests using Fastify
const listenIP = "127.0.0.1";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
