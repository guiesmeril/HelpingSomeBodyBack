const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Ong = require('../models/Ong');
const Voluntario = require ('../models/Voluntario');
const Donates = require ('../models/Donates');

const conexao = new Sequelize(dbConfig);

Ong.init(conexao);

Voluntario.init(conexao);

Donates.init(conexao);

module.exports = conexao ;