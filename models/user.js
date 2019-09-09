const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        pass_word: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        store: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        }
    });

    User.prototype.validatePassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    // User.hook("beforeCreate", function(user) {
    //     user.pass_word = bcrypt.hashSync(user.pass_word, bcrypt.genSaltSync(10), null);
    // });

    // return User;

    //Break in case if above code doesn't work
    User.beforeCreate(user => {
   user.password = bcrypt.hashSync(
     user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
};