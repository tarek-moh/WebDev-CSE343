const ws = require("ws");

const wss = new ws.WebSocketServer({ port: 8080 });

console.log("WebSocket server started on port 8080");

wss.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("message", (data) => {

        wss.clients.forEach((client) => {
            if (socket !== client && client.readyState === ws.OPEN) {
                client.send(data.toString());
            }
        });
    });

    socket.on("close", () => {
        console.log("Client disconnected");
    });
});
