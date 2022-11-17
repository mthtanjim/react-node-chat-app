const express = require("express")
const app = express()
const http = require('http')
const cors = require('cors')
const {} = require("socket.io")

app.use(cors())

const server = http.createServer(app)


server.listen(4001, () => {
    console.log("SERVER RUNNING")
})