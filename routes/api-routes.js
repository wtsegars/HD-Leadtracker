const db = require('../models');
const passport = require('../config/passport');

module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/users");
    });

    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            res.json({});
        }
        else {
            res.json({
                username: req.user.user,
                id: req.user.store
            });
        }
    });
};