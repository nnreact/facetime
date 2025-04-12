import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const httpServer = http.createServer(app);
const socketServer = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});


socketServer.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("offer", (offer) => {
        socket.broadcast.emit("offer", offer);
    })

    socket.on("answer", (answer) => {
        socket.broadcast.emit("answer", answer);
    })

    socket.on("ice-candidate", (candidate) => {
        socket.broadcast.emit("ice-candidate", candidate);
    })

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});


httpServer.listen(3000, '0.0.0.0', () => {
    console.log("Server is running on port 3000");
});