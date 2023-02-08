import express from "express";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";

const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocketServer({ server: server });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
