const app = require("./config/app");
const http = require("http");

const port = 3000;

app.set("port", process.env.port || port);

const server = http.createServer(app);

server.listen(port);
server.on("listening", () => console.log(`listening on port ${port}`));
