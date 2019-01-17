let socket = io.connect("http://localhost:4000");

let handle = document.getElementById('handle'),
    message = document.getElementById('message'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');

btn.addEventListener('click', function() {
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
});

socket.on('chat', function(data) {
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});