const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');


function generateToken(params = {}){
    return jwt.sign( params, authConfig.secret, {
        expiresIn: 86400,
    })
}

module.exports = {

    async index(req, res){ // Show all users 
        const user = await User.find();
        return res.json(user);
    },

    async store(req, res){ // SignUp a new user
        const { nome, email, tel, cpf, cnpj, password, companyCNPJ } = req.body;

        let user = await User.findOne({ email });

        if(!user){
            user = await User.create({ nome, email, tel, cpf, cnpj, password, companyCNPJ });
            console.log("Usuário criado!");
            return res.json({
                user,
                token: generateToken({ id: user.id })
            });
        }
        else{
            console.log("Esse email já está em uso.");
            return res.status(400).send({error: 'Esse email já está em uso'});
        }

    },

    async delete(req, res){ //Delete a specific user

        User.deleteOne({_id: req.params.id}, (err) => {
            //Retornar erro quando não conseguir apagar no banco de dados
            if(err) return res.status(400).json({
                error: true,
                message: "Error: Usuário não foi apagado com sucesso!"
            });
    
            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return res.json({
                error: false,
                message: "Usuário apagado com sucesso!"
            });
        });

    },

    async deleteAll(req, res){ // Delete all users
        User.deleteMany({ }, (err) => {
            //Retornar erro quando não conseguir apagar no banco de dados
            if(err) return res.status(400).json({
                error: true,
                message: "Error: banco de dados não foi corretamente esvaziado!"
            });
    
            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return res.json({
                error: false,
                message: "Banco de dados de usuários completamente apagado!"
            });
        });
    },

    async authenticate(req, res){ // LogIn a user
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if(!user){
            return res.status(400).send({error: 'User not found'});
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send({ error: 'Invalid password' });
        }
        else{

            console.log(`O usuário ${user.nome} se logou!`)

            res.send({
                user,
                token: generateToken({ id: user.id })
            });

        }

    },

    async getName(req, res){

    }



    

}