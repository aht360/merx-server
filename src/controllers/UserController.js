const User = require('../models/User');

const authMiddleware = require('../middlewares/auth');

module.exports = {
    
    async show(req, res){

        res.send({ 
            ok: true, 
            user: req.userId,
            name: req.nome
        });

    }
}