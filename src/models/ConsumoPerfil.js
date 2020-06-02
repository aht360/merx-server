const mongoose = require('mongoose')

const ConsumoPerfilSchema = new mongoose.Schema({
    CodPerfil:{
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
    Patamar:{
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

mongoose.model('ConsumoPerfil',ConsumoPerfilSchema)