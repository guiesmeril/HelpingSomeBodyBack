const Voluntario = require('../models/Voluntario');

module.exports = {

    async create(req , res){
        console.log(req.body);
        try {
           const voluntario = await Voluntario.create(req.body);
            res.status(200).json(voluntario);

        } catch (err) {
            return err;
        }
    }
}

