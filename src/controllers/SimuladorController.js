const ThsVerde = require("../Simulador/ThsVerde");
const ThsAzul = require("../Simulador/ThsAzul")
const ApeV = require("../Simulador/ThsVerdeApe")

const transform = require("../Simulador/transform") 

var mongoose = require("mongoose");

require("../models/Tarifa");

var Tarifa = mongoose.model("Tarifa");

exports.Simulation = async (request, response) => {
  const input = request.body;

  if(input.calc === "ML"){


    var { TCP_TUSD, TCFP_TUSD, TCP_E, TCFP_E, TDMP, TDMFP, ICMS, COFINS, PIS } = await Tarifa.findOne({

      THS: `${input.ths}`,
      GRUPO: `${input.grupoTarifa}`,
      DISTRIBUIDORA: `${input.distribuidora}`,
      TIPO_CONV_APE: `CONV`

    });

    console.log('achei na table')
    
    if(input.ths ==="VERDE"){

      console.log('eh verde')

      const { ResultCativo, ResultLivre } = ThsVerde.TableVerde( input, TCP_TUSD, TCFP_TUSD, TCP_E, TCFP_E, TDMP, TDMFP, ICMS, COFINS, PIS );

      transform.convert(ResultCativo)
      transform.convert(ResultLivre)

      const data = { input, ResultCativo,ResultLivre };
      
      response.header("Access-Control-Allow-Origin", "*");

      return response.json(data);

    } else{
      console.log('eh azul')
      const {ResultCativo,ResultLivre} = ThsAzul.TableAzul(input,TCP_TUSD,TCFP_TUSD,TCP_E,TCFP_E,TDMP,TDMFP,ICMS,COFINS,PIS);
      transform.convert(ResultCativo)
      transform.convert(ResultLivre)
      const data = { input, ResultCativo,ResultLivre };
      response.header("Access-Control-Allow-Origin", "*");
      return response.json(data);
    }
  
  }
  
};
