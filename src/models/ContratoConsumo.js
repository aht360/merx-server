const mongoose = require('mongoose')

const ContratoConsumoSchema = new mongoose.Schema({
    CodAgente:{
        type:String,
        required:true,
    },
    NomeEmpresarial:{
        type:String,
        required:true,
    },
    CodPerfil:{
        type:String,
        required:true,
    },
    Sigla:{
        type:String,
        required:true,
    },
    Jan19:{
        type:String,
        required:true,
    },
    Fev19:{
        type:String,
        required:true,
    },
    Mar19:{
        type:String,
        required:true,
    },
    Abr19:{
        type:String,
        required:true,
    },
    Mai19:{
        type:String,
        required:true,
    },
    Jun19:{
        type:String,
        required:true,
    },
    Jul19:{
        type:String,
        required:true,
    },
    Ago19:{
        type:String,
        required:true,
    },
    Set19:{
        type:String,
        required:true,
    },
    Out19:{
        type:String,
        required:true,
    },
    Nov19:{
        type:String,
        required:true,
    },
    Dez19:{
        type:String,
        required:true,
    },
    

},{timestamps: true})

mongoose.model('ContratoConsumo', ContratoConsumoSchema)