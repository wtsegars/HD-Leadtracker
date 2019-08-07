const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/main-menu", function(req, res) {
    res.sendFile(path.join(__dirname, "main-menu.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});