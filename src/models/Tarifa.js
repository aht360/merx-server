const mongoose = require('mongoose')

const TarifaSchema = new mongoose.Schema({
    DISTRIBUIDORA:{
        type:String,
        required:true,
    },
    GRUPO:{
        type:String,
        required:true,
    },
    THS:{
        type:String,
        required:true,
    },
    TIPO_CONV_APE:{
        type:String,
        required:true,
    },
    TRIBUTACAO:{
        type:String,
        required:true,
    },
    ICMS_TUSD:{
        type:String,
        required:true,
    },
    TCP_TUSD:{
        type:Number,
        required:true,
    },
    TCFP_TUSD:{
        type:Number,
        required:true,
    },
    TCP_E:{
        type:Number,
        required:true,
    },
    TCFP_E:{
        type:Number,
        required:true,
    },
    TDMP:{
        type:Number,
        required:true,
    },
    TDMFP:{
        type:Number,
        required:true,
    },
    ICMS:{
        type:Number,
        required:true,
    },
    COFINS:{
        type:Number,
        required:true,
    },
    PIS:{
        type:Number,
        required:true,
    },
},{timestamps: true})

mongoose.model('Tarifa',TarifaSchema)