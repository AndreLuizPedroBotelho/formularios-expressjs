var express = require("express");
var app = new express();
var handlebars = require("express-handlebars")
var bodyParser = require("body-parser")
    //Configuração da template engine
    app.engine("handlebars", handlebars({defaultLayout: 'main'}))
    app.set("view engine", "handlebars")
    app.get("/",(req, res) => {
        res.render("layouts/main",{
            body:'<h1>Projeto Inicial</h1>'+
            '<button onclick="onredirect(\'/form\')">Tela de Formulário</button>'
        });
    })
    //Configuiração do body Parser
    app.use(bodyParser.urlencoded({extended:false})); 
    app.use(bodyParser.json());     
     
    app.post("/dados",(req, res) => {
        res.json(req.body);
    })

    app.get("/form",(req, res) => {
        res.render("formulario");
    })

app.listen(8080, () => {
    console.log("Servidor rodando");
})