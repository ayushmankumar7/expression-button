const io = require('socket.io')(3000)

io.on('connection', socket => {
    console.log("New User")
    // socket.emit('chat-message', "Hello World")
    socket.on("sound1", message => {
        // console.log(message)
        socket.broadcast.emit('chat-message', message)
    })
})

