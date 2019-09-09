const path = require('path');
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
    app.get("/", function(req, res) {
        if (req.user) {
            res.redirect("/main-menu");
        }

        res.sendFile(path.join(__dirname, "../pages/index.html"));
    });

    app.get("/main-menu", isAuthenticated, function(req,res) {
        res.sendFile(path.join(__dirname, "../pages/main-menu.html"));
    });

    app.get("/main-menu/store-week-leads", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/store-week.html"));
    });

    app.get("/main-menu/store-month-leads", function(req, res) {
        res.sendFile(path.join(__dirname, "../page/store-month.html"));
    });

    app.get("/main-menu/store-year-leads", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/store-year.html"));
    });

    app.get("/main-menu/department-week-leads", function(req, res) {
        res.sendFile(path.join(__dirname, "../page/dept-week.html"));
    });

    app.get("/main-menu/department-month-leads", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/dept-month.html"));
    });

    app.get("/main-menu/department-year-leads", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/dept-year.html"));
    });

    app.get("/main-menu/update-leads", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/update-leads.html"));
    });

    app.get("/main-menu/set-goals", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/set-goals.html"));
    });
};