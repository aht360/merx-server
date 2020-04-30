import React,{useState,useEffect} from 'react'
import NavBar from '../../Components/NavBar/navBar.js'
import {InputContainer} from './styled.js'
import api from '../../Services/api.js'
import Simulator from './simulator.js'


export default function Simulacao(){

    const [demanda,setDemanda] = useState(0)
    const [demandaUlt,setDemandaUlt] =useState(0)
    const [consumoPonta,setConsumoPonta] = useState(0)
    const [consumoPontaFora,setConsumoPontaFora] = useState(0)
    const [usaGerador,setUsaGerador] = useState('sim')
    const [consumoGerador,setConsumoGerador] = useState(0)
    const [custoGeracaoDisel,setCustoGeracaoDisel] = useState(0)
    const [distribuidora,setDistribuidora] = useState('celpe')
    const [grupoTarifa,setGrupoTarifa] = useState('a4')
    const [icms,setIcms] = useState(0)
    const [pis,setPis] = useState(0)
    const [cofin,setCofins] = useState(0)
    const [fonte,setFonte] = useState('conv')
    const [inputs,setInputs] = useState({})
    const [results,setResults] = useState({})

    async function handleSimulation(e){
        e.preventDefault()
        const planilha = {demanda,demandaUlt,consumoPonta,consumoPontaFora,usaGerador,consumoGerador,custoGeracaoDisel,distribuidora,grupoTarifa,icms,pis,cofin,fonte}    

        try{
           const values = await api.post('simulacao',planilha)
           const {input,resultCativo} = values.data
           setInputs(input)
           setResults(resultCativo)
        }catch(err){
            alert('Erro, tente novamente.')
        }

    }
    return(
        <div>
            <NavBar/>
            <InputContainer>
                <form onSubmit={handleSimulation}>
                    <span>Demanda:<input type="text" value={demanda} onChange={e=>setDemanda(e.target.value)}/> kW </span>
                    <span>Demanda Ultrapassagem:<input type="text" value={demandaUlt} onChange={e=>setDemandaUlt(e.target.value)}/>kW</span>
                    <span>Consumo de Ponta:<input type="text" value={consumoPonta} onChange={e=>setConsumoPonta(e.target.value)}/>kWh</span>
                    <span>Consumo Fora de Ponta:<input type="text"  value={consumoPontaFora} onChange={e=>setConsumoPontaFora(e.target.value)}/>kWh</span><br></br>

                    <span>Usa Gerador:
                    <select id="usa-gerador" value={usaGerador} onChange={e=>setUsaGerador(e.target.value)}>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select></span><br></br>

                    <span>Consumo Gerador:<input type="text" value={consumoGerador} onChange={e=>setConsumoGerador(e.target.value)}/></span>
                    <span>Custo da Geração Disel:<input type="text" value={custoGeracaoDisel} onChange={e=>setCustoGeracaoDisel(e.target.value)}/></span><br></br>

                    <span>Distribuidora:
                    <select id="distribuidora" value={distribuidora} onChange={e=>setDistribuidora(e.target.value)}>
                        <option value="celpe">CELPE</option>
                        <option value="cemar">CEMAR</option>
                        <option value="cepisa">CEPISA</option>
                        <option value="cpflPaulista">CPFL PAULISTA</option>
                        <option value="eletropaulo">ELETROPAULO</option>
                        <option value="enelCe">ENEL</option>
                        <option value="epb">EPB</option>
                        <option value="ese">ESE</option>
                        <option value="coelba">COELBA</option>
                    </select></span>
                    <br></br>
                    <span>Grupo Tarifário:<select id="grupo-tarifa" value={grupoTarifa} onChange={e=>setGrupoTarifa(e.target.value)}>
                        <option value="a4">A4</option>
                        <option value="a3">A3</option>
                    </select></span>
                    <br></br>
                    <span>icms:<input type="text" value={icms} onChange={e=>setIcms(e.target.value)}/>%</span>
                    <span>pis:<input type="text" value={pis} onChange={e=>setPis(e.target.value)}/>%</span>
                    <span>cofin:<input type="text" value={cofin} onChange={e=>setCofins(e.target.value)}/>%</span>
                    <br></br>
                    <span>Tipo de fonte:<select id="tipo-fonte" value={fonte} onChange={e=>setFonte(e.target.value)}>
                        <option value="conv">Convencional</option>
                        <option value="i5">i5</option>
                        <option value="i1">i1</option>   
                    </select></span>
                    <br></br>
                    <br></br>     
                    <button>Simular</button>
                </form>  
                <br></br><br></br><br></br>
                <Simulator inputs={inputs} results={results}></Simulator>
            </InputContainer>
        </div>
    )
}
