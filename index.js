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
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.get("/list-anime", function (req, res) {
    res.render('listAnime');
});

app.get("/new-user", function (req, res) {
    res.render("newUser");
})

app.post("/new-user", function (req, res) {
    User.create({
        name:req.body.name,
        userName: req.body.userName,
        password:req.body.password,
        email:req.body.email
    }).then(function(){
        res.redirect("/list-anime");
    }).catch(function(erro){
        res.send(`Houve um erro: ${erro}`);
    })
})

app.listen("8080", function () {
    console.log("Conexão estabelecida");
});