const app = require("./config/app");
const http = require("http");

const port = 3000;

app.set("port", process.env.PORT || port);

const server = http.createServer(app);

server.listen(process.env.PORT || port);
server.on("listening", () => console.log(`listening on port ${process.env.PORT || port}`));
