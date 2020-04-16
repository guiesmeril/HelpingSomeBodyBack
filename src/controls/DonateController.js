const Donates = require('../models/Donates');

module.exports = {

    async create(req , res){
        console.log(req.body);
        try {
           const donates = await Donates.create(req.body);
            res.status(200).json(donates);

        } catch (err) {
            return err;
        }
    }
    }


