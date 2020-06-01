const mongoose = require('mongoose')

const DadosCadastraisSchema = new mongoose.Schema({
    CodAgente:{
        type:String,
        required:true,
    },
    SiglaAgente:{
        type:String,
        required:true,
    },
    NomeAgente:{
        type:String,
        required:true,
    },
    CnpjAgente:{
        type:String,
        required:true,
    },
    CodPerfilAgente:{
        type:String,
        required:true,
    },
    SiglaPerfilAgente:{
        type:String,
        required:true,
    },
    ClassePerfilAgente:{
        type:String,
        required:true,
    },
    StatusPerfilAgente:{
        type:String,
        required:true,
    },
    CategoriaAgente:{
        type:String,
        required:true,
    },
    SubmercadoPerfilAgente:{
        type:String,
        required:true,
    },
    PerfilVarej:{
        type:String,
        required:true,
    },

},{timestamps: true})

mongoose.model('DadosCadastrais',DadosCadastraisSchema)