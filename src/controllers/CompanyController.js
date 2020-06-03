const Company = require('../models/Company');



module.exports = {

    async index(req, res){ // Show all company 
        const company = await Company.find();
        console.log('Listando todas as empresas...');
        return res.json(company);
    },

    async store(req, res){ // SignUp a new company
        const { Nome, CNPJ, Sigla, InicioACL, Submercado, Classe, Categoria, AgCC, ContEnerg, GarantCont } = req.body;
        
        console.log('Vou cadastrar o CNPJ: ' + CNPJ)

        let company = await Company.findOne({ CNPJ });

        if(!company){
            company = await Company.create({ Nome, CNPJ, Sigla, InicioACL, Submercado, Classe, Categoria, AgCC, ContEnerg, GarantCont });
            console.log("Empresa criada!");
            return res.json({ company });
        }
        else{
            console.log("Esse CNPJ já está em uso.");
            return res.status(400).send({error: 'Esse CNPJ já está em uso'});
        }

    },

    async deleteAll(req, res){ // Delete all company
        console.log('Tentando deletar todas as empresas');
        Company.deleteMany({ }, (err) => {
            //Retornar erro quando não conseguir apagar no banco de dados
            if(err) return res.status(400).json({
                error: true,
                message: "Error: Tabela Company não foi corretamente esvaziada!"
            });
    
            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return res.json({
                error: false,
                message: "Tabela Company completamente esvaziada!"
            });
        });
    },

    async show(req, res){ // Show company data

        const { companyCNPJ } = req.body;

        console.log(companyCNPJ)

        const company = await Company.findOne({ CNPJ: companyCNPJ });

        if(!company){
            console.log("Não achei a empresa");
            return res.status(400).send({error: 'Company not found'});
        }
        else{
            console.log("Achei a empresa!");
            return res.json({
                company
            });
        }
    },

}