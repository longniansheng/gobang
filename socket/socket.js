const app = require("http").createServer();
const io = require("socket.io")(app);

const PORT = 8080;

let clientCount = 0;

const socketMap = {};

let colorMap = {};

app.listen(PORT);

// function bindEvent(socket, event) {}

io.on("connect", socket => {
  clientCount = clientCount + 1;
  socket.clientNum = clientCount;
  socketMap[clientCount] = socket;

  if (clientCount % 2 === 1) {
    colorMap[clientCount] = "black";
    socket.emit("wating");
  } else {
    colorMap[clientCount] = "white";
    socket.emit("start");
    socketMap[clientCount - 1].emit("start");
  }

  socket.on("paly", data => {
    socketMap[clientCount - 1].emit("paly", data);
  });

  socket.on("disconnect", () => {
    clientCount = clientCount - 1;
  });
});
