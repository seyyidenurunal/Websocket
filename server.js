const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(5000);

app.use(express.static('public'));

const io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })
}) ;

socket.on('typing', data => {
    socket.broadcast.emit('typing', data)
})

socket.on('chat', data => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.sender + ' : </strong>' + data.message + '</p>'
    message.value = '';
});
    
socket.on('typing', data => {
    feedback.innerHTML = '<p>' + data + ' yazıyor...</p>'
});