const express = require("express")
const Tarifas = require('./controllers/TarifasController')
const Simulador = require('./controllers/SimuladorController')
const routes = express.Router()


routes.post('/simulacao', Simulador.Simulation)


//adm tem q mudar pra post depoiss
routes.get('/cadTarifa', Tarifas.CadTarifas)

module.exports = routes