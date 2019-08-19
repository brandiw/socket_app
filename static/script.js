// Client side javascript
const socket = io();
const chatForm = document.getElementById("chat-form");

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var message = event.target.chat.value;
    var name = event.target.name.value;

    socket.emit("chat message", { name, message });

    event.target.chat.value = "";
});

socket.on("chat message", function(msg) {
    var p = document.createElement("p");
    p.innerText = `${msg.name} says: ${msg.message}`;
    document.getElementById("messages").appendChild(p);
});
