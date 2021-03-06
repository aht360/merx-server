const CadDadosXLSX = require('../reader/LeitorDadosCadastraisXLSX');
const CadConsumoPerf = require('../reader/LeitorConsumoPerfilAgente');
const CadContrato = require('../reader/LeitorContrato_Consumo');

const mongoose = require('mongoose');

require('../models/DadosCadastrais.js');
require('../models/ConsumoPerfil.js');
require('../models/ContratoConsumo.js');

const DadosCadastrais = mongoose.model("DadosCadastrais");
const ConsumoPerfil = mongoose.model("ConsumoPerfil");

const ContratoConsumo = mongoose.model('ContratoConsumo');

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

    async CadConsumo(request, response){
        console.log('Povoando planilha do consumo...');

        const { data } = CadConsumoPerf;

        try{
            await ConsumoPerfil.collection.insertMany(data);
        } catch(e){
            console.log(e);
        }

        return response.json(data);
    },

    async showAllData(req, res){ // Show all data 
        console.log('Mostrando todos os dados...')
        const data = await DadosCadastrais.find();
        return res.json(data);
    },

    async getData(request, response){
        console.log('Procurando dados...');

        const { NomeAgente } = request.body;
        
        console.log(NomeAgente)

        let data = await DadosCadastrais.find({ NomeAgente });

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

    async deleteDadosConsumo(req, res){
        console.log('Deletando BD consumo...')
        ConsumoPerfil.deleteMany({ }, (err) => {
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

    async getDataConsumo(request, response){
        console.log('Procurando dados consumo...');

        const { NomeAgente } = request.body;
        
        console.log(NomeAgente)

        let data = await ConsumoPerfil.find({ NomeAgente });

        if(!data){
            console.log("Não achei Dados com essa Sigla");
            return response.status(400).json({error: 'Essa sigla não está no bd'});
        }
        else{
            return response.json(data);
        }
    },

    async CadContrato(request, response){
        console.log('Povoando planilha do contrato...');

        const { data } = CadContrato;

        try{
            await ContratoConsumo.collection.insertMany(data);
        } catch(e){
            console.log(e);
        }

        return response.json(data);
    },

    async deleteDadosContrato(req, res){
        console.log('Deletando BD contrato...')
        ContratoConsumo.deleteMany({ }, (err) => {
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

    async getDataContrato(request, response){

        
        var { Sigla } = request.body;
        console.log('Procurando dados contrato de ' + Sigla)
        

        

        let data = await ContratoConsumo.findOne({ Sigla });

        if(!data){
            console.log("Não achei Dados com esse código");
            return response.status(400).json({error: 'Esse código não está no bd'});
        }
        else{
            return response.json(data);
        }
    },


    

}