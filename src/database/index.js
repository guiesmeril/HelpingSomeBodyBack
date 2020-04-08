const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Ong = require('../models/Ong');
const conexao = new Sequelize(dbConfig);

Ong.init(conexao);

module.exports = conexao ;