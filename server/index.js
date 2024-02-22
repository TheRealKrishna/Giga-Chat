const express = require('express')
const app = express()
const http = require('http');
const socketIo = require('socket.io');
const mongoConnect = require("./database/connect.js")
const cors = require('cors');

// basic server inits
mongoConnect()
app.use(express.json())
app.use(cors());
const server = http.createServer(app);
const io = new socketIo.Server(server,{
  cors:{
    origin:process.env.DOMAIN
  }
});

// app routes
app.use("/api/auth", require("./api/auth.js"))
app.use("/api/chat", require("./api/chat.js"))

app.use("/api", (req, res)=>{
  return res.send("Backend for GigaChat...")
})

//io
io.on('connection', (socket) => {
  socket.on('newMessage', () => {
    io.emit('newMessage')
  });
});


// server run
server.listen(80, () => {
  console.log(`Server Runinng on: http://localhost:80`)
})