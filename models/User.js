const db = require("./db");
const User = db.sequelize.define("User", {
    name: {
        type: db.Sequelize.STRING
    },
    userName: {
        type: db.Sequelize.STRING
    },

    password: {
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    }
})

module.exports = User;

//User.sync({force: true});