const express = require("express")
const Tarifas = require('./controllers/TarifasController')
const Simulador = require('./controllers/SimuladorController')
const Email = require('./controllers/EmailController')

const routes = express.Router()


routes.post('/simulacao', Simulador.Simulation)


//adm tem q mudar pra post depoiss
routes.get('/cadTarifa', Tarifas.CadTarifas)

routes.post('/email', Email.sendEmail)

module.exports = routes