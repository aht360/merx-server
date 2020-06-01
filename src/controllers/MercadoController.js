const CadDadosXLSX = require('../reader/LeitorDadosCadastraisXLSX');
const mongoose = require('mongoose');

require('../models/DadosCadastrais.js');

const DadosCadastrais = mongoose.model("DadosCadastrais");

module.exports = {

    async CadDados(request, response){
        console.log('Povoando planilha...');

        const { data } = CadDadosXLSX;

        try{
            await DadosCadastrais.collection.insertMany(data);
        } catch(e){
            console.log(e);
        }

        return response.json(data);
    },

    async getData(request, response){
        console.log('Procurando dados...');

        const { SiglaAgente } = request.body;
        
        console.log(SiglaAgente)

        let data = await DadosCadastrais.find({ SiglaAgente });

        if(!data){
            console.log("Não achei Dados com essa Sigla");
            return response.status(400).json({error: 'Essa sigla não está no bd'});
        }
        else{
            return response.json(data);
        }

    },

    async deleteDados(req, res){
        console.log('Deletando BD...')
        DadosCadastrais.deleteMany({ }, (err) => {
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


    

}