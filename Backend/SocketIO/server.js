import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"http://localhost:3001",
        methods: ["GET", "POST"],
    },
});


//real time message code
export const getReceiverSocketId = (receiverId) => {
    return users[receiverId];
};


const users = {};


//used to listen the events on the server side
io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId)
    {
        users[userId] = socket.id;
        console.log("Hello ",users);
    }

    //used to send the events to all the connected users
    io.emit("getOnlineUsers", Object.keys(users));

    //used to listen client side events emitted by the server side and client side
    socket.on("disconnect", ()=>{
        console.log("a user is disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUsers", Object.keys(users));
    });
});

export {app, io, server};