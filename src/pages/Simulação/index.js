import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/navBar.js';
import { InputContainer } from './styled.js';
import api from '../../Services/api.js';
import SimulatorVerde from './SimulatorVerde.js';
import SimulatorAzul from './SimulatorAzul.js';

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

  const [calc, setCalc] = useState('CONV');
  const [desconto,setDesconto] = useState('0')
  const [icms, setIcms] = useState();
  const [pis, setPis] = useState();
  const [cofin, setCofins] = useState();
  const [inputs, setInputs] = useState({});
  const [resultCativo, setResultCativo] = useState({});
  const [resultLivre, setResultLivre] = useState({});

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
    };

    try {
      const results = await api.post('simulacao', planilha);
      const { input,ResultCativo,ResultLivre} = results.data;
      setInputs(input);
      setResultCativo(ResultCativo);
      setResultLivre(ResultLivre)
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

          <span>icms:
            <input
              type="text"
              value={icms}
              onChange={(e) => setIcms(e.target.value)}/>
            %
          </span>
          <span>pis:
            <input
              type="text"
              value={pis}
              onChange={(e) => setPis(e.target.value)}/>
            %
          </span>
          <span>cofin:
            <input
              type="text"
              value={cofin}
              onChange={(e) => setCofins(e.target.value)}/>
            %
          </span>
          <br></br>
          <br></br>
          <br></br>
          <button>Simular</button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        {(ths==="VERDE") && <SimulatorVerde inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre}></SimulatorVerde>}
        {ths==="AZUL"&& <SimulatorAzul inputs={inputs} resultCat={resultCativo}  resultLiv={resultLivre}></SimulatorAzul>}
      </InputContainer>
    </div>
  );
}
