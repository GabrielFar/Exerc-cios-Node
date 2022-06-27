const express = require("express")
const cors = require("cors")

const app = express()

//middle wear (simulação da API do projeto Previsão do Tempo)

app.use(function(req, resp, next){
    resp.header("Access-Control-Allow-Origin", "*")
    app.use(cors())
    next()
})

//

const porta = 3001
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/Ola", function(req, resp){
    
    resp.send(
        `
            <htlm>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <p> Olá Mundo </p>
                </body>
            </html>
        `
    )
})

const data = new Date()
var hora = data.getHours() + ":" + data.getMinutes()

app.get("/Hora", function(req, resp){
    
    resp.send(
        `
            <htlm>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <p> Agora são ${hora} </p>
                </body>
            </html>
        `
    )
})

var dia = data.getDate()

app.get("/Dia", function(req, resp){
    
    resp.send(
        `
            <htlm>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <p> Hoje é dia ${dia} </p>
                </body>
            </html>
        `
    )
})