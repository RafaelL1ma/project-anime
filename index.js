//Imports
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const User = require("./models/User");
const bodyParser = require("body-parser");

//Config
//Template Engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.get("/list-anime", function (req, res) {
    res.render('listAnime');
});

//CRUD de usuário
app.get("/new-user", function (req, res) {
    res.render("newUser");
})

app.post("/new-user", function (req, res) {
    User.create({
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email
    }).then(function () {
        res.redirect("/list-user");
    }).catch(function (erro) {
        res.send(`Houve um erro: ${erro}`);
    })
})

app.get("/list-user", function (req, res) {
    User.findAll().then(function (user) {
        res.render("listUser", { user: user });
    })
})

app.get("/delete-user/:id", function (req, res) {
    User.destroy({ where: {"id": req.params.id } }).then(function () {
        res.redirect("/list-user");
    }).catch(function () {
        res.send("Usuário já deletado ou inexistente!");
    })
})

/*app.get("/update-user/:id", function (req, res) {
    User.findAll({ where: {"id": req.params.id}}).then(function (user) {
        res.render("updateUser", { user: user });
    }).catch(function () {
        res.send("Usuário não encontrado!")
    })
})

app.post("/update-user/:id", function(req, res) {
    User.update({ where: { "id": req.params.id }}).then(function () {
        res.redirect("/list-user");
    }).catch(function () {
        res.send("Usuário inexistente!")
    })
})*/

app.listen("8080", function () {
    console.log("Conexão estabelecida");
});