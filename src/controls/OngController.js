const Ong = require('../models/Ong');

module.exports = {

    async create(req , res){
        try {
           const ong = await Ong.create(req.body);
            res.status(200).json(ong);

        } catch (err) {
            return err;
        }
    },
    async listar(req, res) {
        try{
            const ong = await Ong.findAll();
            res.status(200).json(ong);
    
        }catch(err){
            return err;
        }
    },
    async detalhe(req, res) {
        try{
           
            const ong = await Ong.findByPk(req.params.id);
            res.status(200).json(ong);
                
        }catch(err){
            return err;
        }
    
    },
    async update(req, res) {

        const id_ong = await Ong.findOne({
            where: {id: req.params.id},
        });
        if(!id_ong){
         return  res.status(400).json({ error: 'ID da Ong não encontrado ou não existe' });
             
        }
            try {
                const ong = await Ong.update(req.body, {
                    where: {
                        id: req.params.id
                    }
            
                });
                res.status(200).send('Update feito com sucesso!');
            } catch (error) {
                return err;
            }
        
    },
    async delete(req, res) {
        try{
            await Ong.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200);
    
        }catch(err){
            return err;
        }
    },

}

 