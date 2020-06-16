const Voluntario = require('../models/Voluntario');
const { Op } = require("sequelize");

module.exports = {
    async create(req , res){
        console.log(req.body);
        try {
            const usuario = await Voluntario.findOne({where:{
                email: req.body.email
            }})

            if(usuario) {
                res.status(401).json({error: 'usuario ja existe'})
            }

           const voluntario = await Voluntario.create(req.body);
            res.status(200).json(voluntario);

        } catch (err) {
            return err;
        }
    }



}

