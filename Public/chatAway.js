let socket = io.connect("http://localhost:4000");

let handle = document.getElementById('handle'),
    message = document.getElementById('message'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

btn.addEventListener('click', function() {
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
});

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
});

socket.on('chat', function(data) {
    //here we're listening for the chat event which happens after the button press. This is where we clear the feedback string.
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});

socket.on('typing', function(data) {
    feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});