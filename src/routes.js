const express = require('express');
const routes = express.Router();
const OngController = require('./controls/OngController');
const AuthController = require('./controls/AuthController');
const VoluntarioController = require('./controls/VoluntarioController');
const DonateController = require ('./controls/DonateController')


routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.listar); 
routes.get('/ongs/:id', OngController.detalhe); 
routes.put('/ongs/:id', OngController.update);
routes.delete('/ongs/:id', OngController.delete);

routes.post('/auth', AuthController.auth);

routes.post('/register', VoluntarioController.create);

routes.post('/newdonates', DonateController.create);

routes.get('/donates', DonateController.listar); 


module.exports = routes;