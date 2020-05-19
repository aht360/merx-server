var tabela = require('./tabelaEnergia')

exports.TableVerde = function (input,TCP_TUSD,TCFP_TUSD,TCP_E,TCFP_E,TDMP,TDMFP,ICMS,COFINS,PIS) {

  var {cliente,cnpj,distribuidora,ths,grupoTarifa,demanda,demandaFpu,consumoP,consumoPf,usaGerador,consumoGerador,geradorACL,
    custoGeracaoDisel,desconto,icms,pis,cofin} = input 

    
  var impostos = 1 - ICMS - COFINS - PIS

  var cativoDemandaUnica  = TDMFP / impostos
  var cativoDemandaUltrapassagem = cativoDemandaUnica*2
  var cativoConsumoPonta = (TCP_E+TCP_TUSD)/impostos/1000
  var cativoConsumoPontaFora = (TCFP_E+TCFP_TUSD)/impostos/1000
  var qtdGerador = (consumoPf*0.10 - consumoP)

  var totalDemandaUnica = demanda * cativoDemandaUnica
  var totalDemandaUltrapassagem = cativoDemandaUltrapassagem * demandaFpu
  var totalConsumoPonta = cativoConsumoPonta * consumoP
  var totalcativoConsumoPontaFora = cativoConsumoPontaFora * consumoPf
  var totalGerador  

  if(consumoGerador == "N/A"){
    totalGerador = qtdGerador * custoGeracaoDisel
  }else{
    totalGerador = consumoGerador * custoGeracaoDisel
  }
  var totalCativo = totalDemandaUnica + totalDemandaUltrapassagem + totalConsumoPonta + totalcativoConsumoPontaFora + totalGerador


  var ResultCativo = {cativoDemandaUnica,cativoDemandaUltrapassagem,cativoConsumoPonta,cativoConsumoPontaFora,qtdGerador,
                      totalDemandaUnica,totalDemandaUltrapassagem,totalConsumoPonta,totalcativoConsumoPontaFora,totalGerador
}
    
  //livre
  var livreDemandaUnica = demanda

    if(cativoDemandaUnica<500){
      livreDemandaUnica = 500
    }
  
  var livreConsumoPonta
  var livreGerador
    if(geradorACL == "nao"){
      livreConsumoPonta = ((consumoPf * 0.1) - consumoP)+ consumoP*1
      livreGerador=0
    }else{
      livreConsumoPonta = consumoP*1
      livreGerador = ((consumoPf*0.1)-consumoP)
    }

  var livreConsumoPontaFora = consumoPf*1
  var energiaACL = livreConsumoPonta + livreConsumoPontaFora + livreGerador

  var tarifaLivreDemandaUnica = (1-desconto)*TDMFP / impostos
  var tarifaLivreConsumoPonta = ((1-desconto)*(TCP_TUSD-TCFP_TUSD) + TCFP_TUSD)/impostos/1000
  var tarifaLivreConsumoForaPonta = TCFP_TUSD/impostos/1000
  var energiaACLTarifa

 //isso vai mudar ainda
  for( let atr in tabela){
    for(let obj in tabela[atr]){
      if(tabela[atr][obj] == desconto*1){
        energiaACLTarifa = tabela[atr].preco
        var livreIcms = (energiaACLTarifa/(1-ICMS))-energiaACLTarifa
      }
    }
  }

  var totalLivreDemanda = livreDemandaUnica * tarifaLivreDemandaUnica
  var totalLivreConsumoPonta = livreConsumoPonta * tarifaLivreConsumoPonta
  var totalLivreConsumoForaPonta = livreConsumoPontaFora * tarifaLivreConsumoForaPonta
  var totalLivreGerador = livreGerador * custoGeracaoDisel
  var totalEnergiaACL = (energiaACL * energiaACLTarifa)/1000
  var totalIcms = (livreIcms*energiaACL)/1000

  var totalLivre = totalLivreDemanda + totalLivreConsumoPonta + totalLivreConsumoForaPonta + totalLivreGerador + totalEnergiaACL + totalIcms 

  var economiaLivre = totalCativo - totalLivre
  var economiaPorcentagem = ((totalCativo-totalLivre)/totalCativo)*100

var ResultLivre = {livreDemandaUnica,livreConsumoPonta,livreConsumoPontaFora,livreGerador,energiaACL,
                    tarifaLivreDemandaUnica,tarifaLivreConsumoPonta,tarifaLivreConsumoForaPonta,
                    custoGeracaoDisel,energiaACLTarifa,totalLivreDemanda,totalLivreConsumoPonta,
                    totalLivreConsumoForaPonta,totalLivreGerador,totalEnergiaACL,livreIcms,totalIcms,
                    totalCativo,totalLivre,economiaLivre,economiaPorcentagem
}

var data = {ResultCativo,ResultLivre}
  return data
};