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
};