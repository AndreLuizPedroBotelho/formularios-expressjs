var express = require("express");
var app = new express();
var handlebars = require("express-handlebars")

    app.engine("handlebars", handlebars({defaultLayout: 'main'}))
    app.set("view engine", "handlebars")

    app.get("/form",(req, res) => {
        res.render("formulario");
    })

app.listen(8080, () => {
    console.log("Servidor rodando");
})