const express = require('express');
const routes = express.Router();
const OngController = require('./controls/OngController')


routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.listar); 
routes.get('/ongs/:id', OngController.detalhe); 
routes.put('/ongs/:id', OngController.update);
routes.delete('/ongs/:id', OngController.delete);

module.exports = routes;