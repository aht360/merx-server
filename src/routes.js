const express = require("express")
const Tarifas = require('./controllers/TarifasController')
const Simulador = require('./controllers/SimuladorController')
const Email = require('./controllers/EmailController')

const SessionController = require('./controllers/SessionController')
const UserController = require('./controllers/UserController')


const authMiddleware = require('./middlewares/auth');

const routes = express.Router()


routes.post('/simulacao', Simulador.Simulation)

//adm tem q mudar pra post depoiss
routes.get('/cadTarifa', Tarifas.CadTarifas)

routes.post('/email', Email.sendEmail)


routes.post('/sessions', SessionController.store); // signUp
routes.get('/sessions', SessionController.index); // show all users
routes.delete('/sessions/:id', SessionController.delete); // delete specific user (put id in header)
routes.get('/cleanRegister', SessionController.deleteAll); // delete all users
routes.post('/authenticate', SessionController.authenticate); // signIn
routes.post('/getName', SessionController.getName);


routes.use(authMiddleware);
routes.get('/user', UserController.getId);
routes.post('/user', UserController.getUser);


module.exports = routes