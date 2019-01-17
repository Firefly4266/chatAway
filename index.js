let express = require('express');
let socket = require('socket.io');

let app = express();

let server = app.listen(4000, function() {
    console.log('Now listening on port 4000');
});
app.use(express.static("Public"));

let io = socket(server);

io.on("connection", function(socket) {
    console.log('made socket connection.', socket.id);
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });
});