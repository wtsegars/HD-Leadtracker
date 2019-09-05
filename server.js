const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({ secret: process.env.secret || "temporary secret" }));

app.get("/", function(req, res) {
    res.send('Test Sucessful');
});

app.get("/main-menu", function(req, res) {
    res.sendFile(path.join(__dirname, "main-menu.html"));
});

app.get("/main-menu/store-leads-week", function(req, res) {
    res.sendFile(path.join(__dirname, "store-week.html"));
});

app.get("/main-menu/store-leads-month", function(req, res) {
    res.sendFile(path.join(__dirname, "store-month.html"));
});

app.get("/main-menu/store-leads-year", function(req, res) {
    res.sendFile(path.join(__dirname, "store-year.html"));
});

app.get("/main-menu/department-leads-week", function(req, res) {
    res.sendFile(path.join(__dirname, "dept-week.html"));
});

app.get("/main-menu/department-leads-month", function(req, res) {
    res.sendFile(path.join(__dirname, "dept-month.html"));
});

app.get("/main-menu/department-leads-year", function(req, res) {
    res.sendFile(path.join(__dirname, "dept-year.html"));
});

app.get("/main-menu/update-leads", function(req, res) {
    res.sendFile(path.join(__dirname, "update-leads.html"));
});

app.get("/main-menu/set-lead-goals", function(req, res) {
    res.sendFile(path.join(__dirname, "set-goals.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});