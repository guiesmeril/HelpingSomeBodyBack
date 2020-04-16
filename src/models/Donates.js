const {Model , DataTypes } = require ('sequelize');

class Donates extends Model {
    static init(sequelize) {
        super.init({
            
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            cpf: DataTypes.STRING,
        },{
            sequelize
        })
    }
}
module.exports = Donates ;



