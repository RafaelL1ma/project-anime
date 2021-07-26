//imports
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

//config
//template engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Database
const sequelize = new Sequelize("project_anime_db", "root", "balisacar96382980", {
    host: "localhost",
    dialect: "mysql"
})
app.get("/list-anime", function (req, res) {
    res.render('listAnime');
});

app.listen("8080", function () {
    console.log("Conexão estabelecida");
});
