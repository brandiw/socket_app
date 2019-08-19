const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// Serve static files w/ the index.html (css, client-side js, images, etc)
app.use("/", express.static("static"));

// home route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// socket.io listner
io.on("connection", function(socket) {
    console.log("connection!");

    socket.on("chat message", function(msg) {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", function() {
        console.log("disconnection!");
    });
});

// Listen!
http.listen(process.env.PORT || 3000);
