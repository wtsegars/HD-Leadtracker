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