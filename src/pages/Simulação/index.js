import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/navBar.js';
import { InputContainer } from './styled.js';
import api from '../../Services/api.js';
import SimulatorVerde from './SimulatorVerde.js';
import SimulatorAzul from './SimulatorAzul.js';
import SimulatorVerdeAPE from './SimulatorVerdeAPE.js'
import SimulatorVerdeAPE2 from './SimulatorVerdeAPE2'

export default function Simulacao() {
  const [cliente, setCliente] = useState('');
  const [cnpj, setCnpj] = useState();
  const [distribuidora, setDistribuidora] = useState('CELPE');
  const [ths, setThs] = useState('VERDE');
  const [grupoTarifa, setGrupoTarifa] = useState('A4');
  const [demanda, setDemanda] = useState();
  const [demandaFpu, setDemandaFpu] = useState();
  const [consumoP, setConsumoP] = useState();
  const [consumoPf, setConsumoPf] = useState();

  const [demandaP,setDemandaP] = useState();
  const [demandaPu,setDemandaPu] = useState()
  const [usaGerador, setUsaGerador] = useState('sim');
  const [geradorACL,setgeradorACL] = useState ('sim')
  const [consumoGerador, setConsumoGerador] = useState('N/A');
  const [custoGeracaoDisel, setCustoGeracaoDisel] = useState();

  const [calc, setCalc] = useState('ML');
  const [desconto,setDesconto] = useState('0')

  const [icms, setIcms] = useState();
  const [pis, setPis] = useState();
  const [cofin, setCofins] = useState();

  const [potenciaTransformador,setpotenciaTransformador] = useState()
  const [tipoInstal,setTipoInstal] = useState('LOCAL')
  const [criterioUsina,setCriterioUsina] = useState('TRANSFORMADOR')
  
  const [inputGeral,setInputGeral] = useState()
  const [localInstalacao,setLocalInstalacao] = useState('METALICA')
  const [geracaoEsperada,SetGeracaoEsperada] = useState()

  const [inputs, setInputs] = useState({});
  const [resultCativo, setResultCativo] = useState({});
  const [resultLivre, setResultLivre] = useState({});
  const [ape,setApe] = useState({})

  async function handleSimulation(e) {
    e.preventDefault();
    const planilha = {
      cliente,
      cnpj,
      distribuidora,
      ths,
      grupoTarifa,
      demanda,  
      demandaFpu,
      consumoP,
      consumoPf,
      demandaP,
      demandaPu,
      usaGerador,
      geradorACL,
      consumoGerador,
      custoGeracaoDisel,
      calc,
      desconto,
      icms,
      pis,
      cofin,

      potenciaTransformador,
      inputGeral,
      tipoInstal,
      criterioUsina,
      localInstalacao,
      geracaoEsperada
    };

    try {
      const results = await api.post('simulacao', planilha);
      const { input,ResultCativo,ResultLivre,ape } = results.data;
      setInputs(input);
      setResultCativo(ResultCativo);
      setResultLivre(ResultLivre)
      setApe(ape)
    } catch (err) {
      alert('Erro, tente novamente.');
    }
  }
  return (
    <div>
      <NavBar />
      <InputContainer>
        <form onSubmit={handleSimulation}>
          <span>Cliente:
            <input
              type="text"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}/>
          </span>
          <span>Cnpj:
            <input
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}/>
          </span>

          <span>Distribuidora:
            <select
              id="distribuidora"
              value={distribuidora}
              onChange={(e) => setDistribuidora(e.target.value)}>
              <option value="CELPE">CELPE</option>
              <option value="CEAL">CEAL</option>
              <option value="CEMAR">CEMAR</option>
              <option value="CEPISA">CEPISA</option>
              <option value="COELBA">COELBA</option>
              <option value="COSERN">COSERN</option>
              <option value="ENEL CE">ENEL CE</option>
              <option value="EPB">EPB</option>
              <option value="ESE">ESE</option>
            </select>
          </span>

          <span>Ths:
            <select
              id="ths"
              value={ths}
              onChange={(e) => setThs(e.target.value)}>
              <option value="VERDE">Verde</option>
              <option value="AZUL">Azul</option>
            </select>
          </span>
          <span>Grupo Tarifário:
            <select
              id="grupo-tarifa"
              value={grupoTarifa}
              onChange={(e) => setGrupoTarifa(e.target.value)}>
              <option value="A4">A4</option>
              <option value="A3">A3</option>
            </select>
          </span>
          <br></br>

          <span>Demanda:
            <input
              type="text"
              value={demanda}
              onChange={(e) => setDemanda(e.target.value)}/>
            kW
          </span>
          <span>Demanda Fora Ponta Ultrapassagem:
            <input
              type="text"
              value={demandaFpu}
              onChange={(e) => setDemandaFpu(e.target.value)}/>
            kW
          </span>

          <span>Consumo de Ponta:
            <input
              type="text"
              value={consumoP}
              onChange={(e) => setConsumoP(e.target.value)}/>
            kWh
          </span>
          <span>Consumo Fora de Ponta:
            <input
              type="text"
              value={consumoPf}
              onChange={(e) => setConsumoPf(e.target.value)}/>
            kWh
          </span>
          <br></br>
          {(ths==="AZUL") && <span>Demanda Ponta:<input type="text" value={demandaP} onChange={(e) => setDemandaP(e.target.value)}/></span>}
          {(ths==="AZUL") && <span>Demanda Ponta Ultrapassagem:<input type="text" value={demandaPu} onChange={(e) => setDemandaPu(e.target.value)}/></span>}
          
          <span>Usa Gerador:
            <select
              id="usa-gerador"
              value={usaGerador}
              onChange={(e) => setUsaGerador(e.target.value)}>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </span>
          <br></br>

          <span>Gerador no ACL:
            <select
              id="gerador-acl"
              value={geradorACL}
              onChange={(e) => setgeradorACL(e.target.value)}>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </span>
          <br></br>

          <span>Consumo Gerador:
            <input
              type="text"
              value={consumoGerador}
              onChange={(e) => setConsumoGerador(e.target.value)}/>
          </span>
          <span>Custo da Geração Disel:
            <input
              type="text"
              value={custoGeracaoDisel}
              onChange={(e) => setCustoGeracaoDisel(e.target.value)}/>
          </span>
          <br></br>
          

          <span>Tipo de calculo:
            <select
              id="tipo-calc"
              value={calc}
              onChange={(e) => setCalc(e.target.value)}>
              <option value="ML">Mercado Livre</option>
              <option value="APE">Autoprodutor</option>
            </select>
          </span>
          <span>DESCONTO:
            <select
              id="desconto"
              value={desconto}
              onChange={(e) => setDesconto(e.target.value)}>
              <option value="0">conv</option>
              <option value="0.5">50%</option>
              <option value="1">100%</option>
            </select>
          </span>

          

          {calc === "APE" &&
          <div>   
            <span>Instalação:
              <select
                id="tipo-instalacao"
                value={tipoInstal}
                onChange={(e) => setTipoInstal(e.target.value)}>
                <option value="LOCAL">Local</option>
                <option value="REMOTA">Remota</option>
              </select>
            </span>  
            <span>Critério tamanho Usina:
              <select
                id="criterio-usina"
                value={criterioUsina}
                onChange={(e) => setCriterioUsina(e.target.value)}>
                <option value="TRANSFORMADOR">Limitada ao Transformador</option>
                <option value="DEMANDA">Limitada a Demanda Contratada</option>
                <option value="AREA">Limitada a Área Disponível</option>
                <option value="DEFINIDA">Potência definida</option>
                <option value="100%">100% do Consumo</option>
                <option value="50%">50% do Consumo</option>
                <option value="25%">25% do Consumo</option>
              </select>
            </span>  
            <span>Potência transformador:
              <input
                type="text"
                value={potenciaTransformador}
                onChange={(e) => setpotenciaTransformador(e.target.value)}/>
            </span>
            <span>
              {criterioUsina ==="TRANSFORMADOR" && <span>Limitado ao Transformador:</span>}
              {criterioUsina ==="DEMANDA" && <span>Limitada a Demanda Contratada:</span>}
              {criterioUsina ==="AREA" && <span>Limitada a Área Disponível:</span>}
              {criterioUsina ==="DEFINIDA" && <span>Limitada a Potência Definida:</span>}
              {criterioUsina ==="100%" && <span>100% do Consumo:</span>}
              {criterioUsina ==="50%" && <span>50% do Consumo:</span>}
              {criterioUsina ==="25%" && <span>25% do Consumo:</span>}
              <input
                type="text"
                value={inputGeral}
                onChange={(e) => setInputGeral(e.target.value)}/>
            </span>    

            <span>Local de Instalaçao:
              <select
                id="local-instalacao"
                value={localInstalacao}
                onChange={(e) => setLocalInstalacao(e.target.value)}>
                <option value="METALICA">Coberta Metalica</option>
                <option value="FIBRO-CIMENTO">Coberta Fibro Cimento</option>
                <option value="SOLO">Solo</option>
              </select>
            </span> 
            <span>Geração esperada:
              <input
                type="text"
                value={geracaoEsperada}
                onChange={(e) => SetGeracaoEsperada(e.target.value)}/>
            </span>   


          </div>
          }


          <br></br>
          <br></br>
          <br></br>
          <button>Simular</button>
        </form>
        {((ths==="VERDE") && (calc==="ML")) && <SimulatorVerde inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre}/>}
        {((ths==="AZUL" ) && (calc==="ML")) && <SimulatorAzul inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre}/>}
        {((ths==="VERDE") && (calc==="APE") && (tipoInstal==="LOCAL")) && <SimulatorVerdeAPE inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre} ape={ape}/>}
        {((ths==="VERDE") && (calc==="APE") && (tipoInstal==="REMOTA")) && <SimulatorVerdeAPE2 inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre} ape={ape}/>}


      </InputContainer>
    </div>
  );
}
