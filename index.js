const express = require('express');
const app = express();

const conversoresTemperatura = require('./service');


app.get('/',(req, res) => {

    let temperatura = req.query.temperatura;
    let conversor = req.query.conversor;

    let conversorFormatado = conversor;
  
    let temperaturaConvertida = conversoresTemperatura.converteTemperatura(temperatura, conversorFormatado); 

    let Json ={temperatura : temperaturaConvertida};
    res.json(Json);
});

app.listen(8080,() => {
    let data = new Date();
    let semana = data.getDay();
    console.log('Servidor iniciado !'+semana);
});