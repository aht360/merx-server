const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({

    Nome:{
        type:String,
        required:true,
    },
    CNPJ:{
        type:String,
        required:true,
    },
    Sigla:{
        type:String,
        required:true,
    },
    InicioACL:{
        type:String,
        required:true,
    },
    Submercado:{
        type:String,
        required:true,
    },
    Classe:{
        type:String,
        required:true,
    },
    Categoria:{
        type:String,
        required:true,
    },
    AgCC:{
        type:String,
        required:true,
    },
    ContEnerg:{
        type:String,
        required:true,
    },
    GarantCont:{
        type:String,
        required:true,
    },
    EnergiaCheck: {
        type: Boolean,
        required: true,
    },
    DistribuidoraCheck: {
        type: Boolean,
        required: true,
    },
    FinanceiroCheck: {
        type: Boolean,
        required: true,
    },
    CCEECheck: {
        type: Boolean,
        required: true,
    },
    MedicaoCheck: {
        type: Boolean,
        required: true,
    },
    AprovacaoCheck: {
        type: Boolean,
        required: true,
    },
    CustoCativo: {
        type: String,
        required: true,
    },
    CustoLivre: {
        type: String,
        required: true,
    },
    Economia: {
        type: String,
        required: true,
    }
    
},{timestamps: true})

module.exports = mongoose.model('Company',CompanySchema)