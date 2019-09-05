const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

passport.use(new LocalStrategy(
    {
        usernameField: "user"
    },
    function(user, password, store, done) {
        db.hd_users.findOne({
            where: {
                username: user
            }
        }).then(function(dbUser) {
            if (!dbUser) {
                return done(null, false, {
                    message: "incorrect username"
                });
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "incorrect password"
                });
            }
            else if (!dbUser.validStore(store)) {
                return done(null, false, {
                    message: "incorrect store number"
                });
            }

            return done(null, dbUser);
        });
    }
));

passport.deserializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;