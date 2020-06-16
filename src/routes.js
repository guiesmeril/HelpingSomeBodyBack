const express = require('express');
const routes = express.Router();
const AuthController = require('./controls/AuthController');
const VoluntarioController = require('./controls/VoluntarioController');
const DonateController = require ('./controls/DonateController')


routes.post('/auth', AuthController.auth);

routes.post('/register', VoluntarioController.create);

routes.post('/newdonates', DonateController.create);

routes.get('/donates', DonateController.listar); 

routes.get('/donates/:id', DonateController.detalhe); 


module.exports = routes;