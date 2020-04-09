const {Model , DataTypes } = require ('sequelize');

class Voluntario extends Model {
    static init(sequelize) {
        super.init({
            
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            telefone: DataTypes.INTEGER,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING
        },{
            sequelize
        })
    }
}
module.exports = Voluntario ;

