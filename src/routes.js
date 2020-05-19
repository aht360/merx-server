const express = require("express")
const Tarifas = require('./controllers/TarifasController')
const simulador = require('./controllers/SimuladorController')
const routes = express.Router()


routes.post('/simulacao', simulador.Simulation)


//adm tem q mudar pra post depoiss
routes.get('/cadTarifa',Tarifas.CadTarifas)

module.exports = routes