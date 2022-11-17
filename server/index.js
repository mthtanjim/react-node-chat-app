const express = require("express")
const app = express()
const http = require('http')
const cors = require('cors')
const {Server} = require("socket.io")

app.use(cors())

const server = http.createServer(app)

//for backend...
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})


//listening event in socket
io.on("connection", (socket) => {
    console.log(`User Connnected:  ${socket.id}`)

    socket.on("discounnect", ()=> {
        console.log("User Discounnected", socket.id)
    })


})

server.listen(4000, () => {
    console.log("SERVER RUNNING AT 4000")
})