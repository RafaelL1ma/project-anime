//Import
const Sequelize = require("sequelize");

//Database
const sequelize = new Sequelize("project_anime_db", "root", "admin", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}