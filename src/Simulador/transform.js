exports.convert = function(obj){

    var aux = obj.economiaPorcentagem
    var formatter = new Intl.NumberFormat('pt-BR',{     //transforma em real
        style:'currency',
        currency:'BRL',
        minimumFractionDigits:2,
      })
  
    for(var atr in obj){
        obj[atr] = formatter.format(obj[atr])
    }

        if(aux){
            obj.economiaPorcentagem = aux.toFixed(1)+"%"
        }
}