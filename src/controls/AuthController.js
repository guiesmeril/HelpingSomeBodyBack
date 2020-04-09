//const Ong = require('../models/Ong');
 const Voluntario = require ('../models/Voluntario');

module.exports = {

    async auth(req,res) {
         
        try{
            const {email, senha} = req.body;
            const user = await Voluntario.findOne ({
                where: {email: email,
                       senha: senha},
            });
            if(!user){
              res.status(400).json({error:'Login ou senha incorretos ou não existe'});
            } 
            res.status(200).send('login correto');
        }catch(err){
           return err ;  
        }
      
     },
};