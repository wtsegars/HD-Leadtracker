const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./config/passport');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.sesstion());

require('./routes/api-routes');
require('./routes/html-routes');

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
      });
});
