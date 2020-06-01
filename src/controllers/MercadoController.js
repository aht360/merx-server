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
        
        console.log(SiglaAgente);

        let data = await DadosCadastrais.findOne({ SiglaAgente });

        if(!data){
            console.log("Não achei Dados com essa Sigla");
            return response.status(400).send({error: 'Essa sigla não está no bd'});
        }
        else{
            return response.json(data);
        }

    }

    

}