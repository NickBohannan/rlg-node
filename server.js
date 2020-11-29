const express = require('express')
const app = express()
const server = require('http').Server(app)

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 8083
 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

server.listen(port, function () {
    console.log(`Listening on ${server.address().port}`)
})