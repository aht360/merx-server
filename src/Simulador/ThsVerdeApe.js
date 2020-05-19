var mongoose = require("mongoose");
require("../models/Tarifa");
var Tarifa = mongoose.model("Tarifa");

const ThsVerde = require("../Simulador/ThsVerde");
var tabela = require('./tabelaEnergia')

async function consulta(input){
    var alu = await Tarifa.findOne({
        THS: input.ths,
        GRUPO: input.grupoTarifa,
        DISTRIBUIDORA: input.distribuidora,
        TIPO_CONV_APE:"CONV"
      })
      return alu
}

exports.TableApeVerde = async function(input,TCP_TUSD,TCFP_TUSD,TCP_E,TCFP_E,TDMP,TDMFP,ICMS,COFINS,PIS){

    var {cliente,cnpj,distribuidora,ths,grupoTarifa,demanda,demandaFpu,consumoP,consumoPf,demandaP,demandaPu,
        usaGerador,geradorACL,consumoGerador,custoGeracaoDisel,calc,desconto,icms,pis,cofin, potenciaTransformador,
        inputGeral,tipoInstal,criterioUsina, localInstalacao,geracaoEsperada} = input
        
    var TabelaVerde = await consulta(input)  
    var {ResultCativo,ResultLivre} = ThsVerde.TableVerde(input,TabelaVerde.TCP_TUSD,TabelaVerde.TCFP_TUSD,TabelaVerde.TCP_E,TabelaVerde.TCFP_E,TabelaVerde.TDMP,TabelaVerde.TDMFP,TabelaVerde.ICMS,TabelaVerde.COFINS,TabelaVerde.PIS)
    
    var {potMAX,demandaUltilizar} = CriterioUsina(criterioUsina,potenciaTransformador,demanda,inputGeral,consumoP,consumoPf)

        if(tipoInstal==="LOCAL"){
            var demandaUsar = demandaUltilizar
                if(demandaUsar<demanda){
                    demandaUsar = demanda
                }
                
            var impostos = 1 - ICMS - COFINS - PIS

            var livreDemandaUnica = demandaUsar
            var livreConsumoPonta
            var livreGerador
                if(geradorACL == "nao"){
                    livreConsumoPonta = ((consumoPf * 0.1) - consumoP)+ consumoP*1
                    livreGerador=0
                }else{
                    livreConsumoPonta = consumoP*1
                    livreGerador = ((consumoPf*0.1)-consumoP)
                }
        
            var livreConsumoPontaFora = consumoPf*0.85
                
            var tarifaLivreDemandaUnica = (1-desconto)*TDMFP / impostos
            var tarifaLivreConsumoPonta = ((1-desconto)*(TCP_TUSD-TCFP_TUSD) + TCFP_TUSD)/impostos/1000
            var tarifaLivreConsumoForaPonta = TCFP_TUSD/impostos/1000

            var totalLivreDemanda = livreDemandaUnica * tarifaLivreDemandaUnica
            var totalLivreConsumoPonta = livreConsumoPonta * tarifaLivreConsumoPonta
            var totalLivreConsumoForaPonta = livreConsumoPontaFora * tarifaLivreConsumoForaPonta
            var totalLivreGerador = livreGerador * custoGeracaoDisel       
            
            var energiaGeracao = geracaoEsperada
                if(geracaoEsperada == 0){
                    energiaGeracao = potMAX*0.18*730
                }
            
            var tarifaEnergiaGeracao = 0
            var totalEnergiaGeracao = energiaGeracao * tarifaEnergiaGeracao

            var energiaComplemento = (livreConsumoPonta+livreConsumoPontaFora+livreGerador)-energiaGeracao
            
            var energiaComplementoTarifa

                for( let atr in tabela){
                    for(let obj in tabela[atr]){
                        if(tabela[atr][obj] == desconto*1){
                            energiaComplementoTarifa = tabela[atr].preco
                            var livreIcms = (energiaComplementoTarifa/(1-ICMS))-energiaComplementoTarifa
                        }
                    }
                }
            
            var totalEnergiaComplemento = energiaComplemento*energiaComplementoTarifa/1000

            var totalEnergiaIcms
                if( energiaComplemento<0){
                    totalEnergiaIcms = 0
                }else{
                    totalEnergiaIcms = (energiaComplemento *livreIcms)/1000
                }
 
                
            var TFSE
                if(livreDemandaUnica>0){
                    TFSE = livreDemandaUnica*0.004*630
                }else{
                    TFSE = energiaGeracao*0.004*630
                }

            var ccee = 150
            var totalLivre = totalLivreDemanda + totalLivreConsumoPonta + totalLivreConsumoForaPonta +
                            totalLivreGerador + totalEnergiaGeracao + totalEnergiaComplemento+
                            totalEnergiaIcms + TFSE + ccee


            var economia = ResultLivre.totalCativo - totalLivre
            
            var economiaPorcentagem = ((ResultLivre.totalCativo-totalLivre)/ResultLivre.totalCativo)*100
            var totalCativo = ResultLivre.totalCativo
            var ResultLivre = {livreDemandaUnica,livreConsumoPonta,livreConsumoPontaFora,livreGerador,
                            tarifaLivreDemandaUnica,tarifaLivreConsumoPonta,tarifaLivreConsumoForaPonta,
                            custoGeracaoDisel,totalLivreDemanda,totalLivreConsumoPonta,
                            totalLivreConsumoForaPonta,totalLivreGerador,totalLivre,totalCativo,economia,economiaPorcentagem
            }
            var ape  = {energiaGeracao,tarifaEnergiaGeracao,totalEnergiaGeracao,energiaComplemento,
                        energiaComplementoTarifa,totalEnergiaComplemento,livreIcms,totalEnergiaIcms,TFSE,ccee
            }

            var data = {ResultCativo,ResultLivre,ape}

        }else{
            
            var demandaEscolhida =  inputGeral
            var demandaUsinaRemota = demandaEscolhida*0.8
            var tarifaDemandaUsina = (1-desconto)*TDMFP/(1 - ICMS - COFINS - PIS)
            var totalUsinaRemota = demandaUsinaRemota*tarifaDemandaUsina
            
            var energiaGeracao = geracaoEsperada
                if(geracaoEsperada == 0){
                    energiaGeracao = demandaEscolhida*0.18*730
                }
            
            var tarifaEnergiaGeracao = 0
            totalEnergiaGeracao = energiaGeracao * tarifaEnergiaGeracao
            
            var energiaComplemento = (ResultLivre.livreConsumoPonta + ResultLivre.livreConsumoPontaFora + ResultLivre.livreGerador) - energiaGeracao

            var energiaComplementoTarifa

            for( let atr in tabela){
                for(let obj in tabela[atr]){
                    if(tabela[atr][obj] == desconto*1){
                        energiaComplementoTarifa = tabela[atr].preco
                        var livreIcms = (energiaComplementoTarifa/(1-ICMS))-energiaComplementoTarifa
                    }
                }
            }

        var totalEnergiaComplemento = (energiaComplemento*energiaComplementoTarifa)/1000
            
        var totalEnergiaIcms 
            if(energiaComplemento < 0){
                totalEnergiaIcms = 0
            }else{
                totalEnergiaIcms = energiaComplemento*livreIcms
            }

        var TFSE
            if(ResultLivre.livreDemandaUnica > 0){
                TFSE = ResultLivre.livreDemandaUnica*0.004*630
            }else{
                TFSE = energiaGeracao*0.004*630
            }

        var ccee = 150

        ResultLivre.totalLivre = (ResultLivre.totalLivreDemanda + ResultLivre.totalLivreConsumoPonta +
        ResultLivre.totalLivreConsumoForaPonta + ResultLivre.totalLivreGerador + totalUsinaRemota*1 + 
        totalEnergiaGeracao*1 + totalEnergiaComplemento*1 + totalEnergiaIcms*1 + TFSE + ccee)

        ResultLivre.economiaLivre = (ResultLivre.totalCativo - ResultLivre.totalLivre)
        ResultLivre.economiaPorcentagem = (ResultLivre.economiaLivre/ResultLivre.totalCativo)*100
        
        var ape = {demandaUsinaRemota,tarifaDemandaUsina,totalUsinaRemota,energiaGeracao,tarifaEnergiaGeracao,
                   totalEnergiaGeracao,energiaComplemento,energiaComplementoTarifa,totalEnergiaComplemento,
                   livreIcms,totalEnergiaIcms,TFSE,ccee
        }
        var data = {ResultCativo,ResultLivre,ape}

    }

    return data
}

function CriterioUsina(CriterioUsina,potenciaTransformador,demanda,inputGeral,consumoP,consumoPf){
    var trafo,potMAX,geracaoUltilizar,demandaUltilizar

        if(CriterioUsina==="TRANSFORMADOR"){
            trafo = potenciaTransformador
            potMAX = trafo/0.8
            
        }else if(CriterioUsina==="DEMANDA"){
            trafo = demanda
            potMAX = trafo/0.8

        }else if(CriterioUsina==="AREA"){
            trafo = (inputGeral/9500)*1000
                if(trafo <= potenciaTransformador){
                    potMAX = trafo
                }else{
                    potMAX = potenciaTransformador/0.8
                }
            
        }else if(CriterioUsina==="DEFINIDA"){
            trafo = inputGeral*0.8
                if(trafo <= potenciaTransformador){
                    potMAX = trafo
                }else{
                    potMAX = potenciaTransformador/0.8
                }

        }else if(CriterioUsina==="100%"){
            trafo = ((1*consumoP+1*consumoPf+2500)*1)/730/0.18
                if(trafo <= potenciaTransformador){
                    potMAX = trafo
                }else{
                    potMAX = potenciaTransformador/0.8
                }

        }else if(CriterioUsina==="50%"){
            trafo = (((1*consumoP+1*consumoPf+2500)*1)*0.5)/730/0.18
                if(trafo <= potenciaTransformador){
                    potMAX = trafo
                }else{
                    potMAX = potenciaTransformador/0.8
                }
 
        }else if(CriterioUsina==="25%"){   
            trafo = (((1*consumoP+1*consumoPf+2500)*1)*0.25)/730/0.18
                if(trafo <= potenciaTransformador){
                    potMAX = trafo
                }else{
                    potMAX = potenciaTransformador/0.8
                }

        }
        geracaoUltilizar = potMAX*0.18*730/1000
        demandaUltilizar = potMAX*0.8

        return {potMAX,demandaUltilizar}
}

