//imports
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//config
//template engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
app.get("/list-anime", function (req, res) {
    res.render('listAnime');
});

app.listen("8080", function () {
    console.log("Conexão estabelecida");
});
