const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const mongoose = require('mongoose');
const {Server} = require('socket.io');

app.use(cors());

const server = require('http').createServer(app);
const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000/',
        methods: ["GET", "POST"],
    }
});


io.on("connection", (socket) => {
    console.log(`User Connected ${socket.id}`);

    socket.on("join_room", () => {
        
    })

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    });
});

/* app.get('/', cors(), async(req, res) =>{
    res.send('Hello World!');
}) */

app.use(express.static(__dirname + '/public'));

server.listen(port, () =>console.log('Server listening at port %d', port));
