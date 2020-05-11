import React from 'react'
import {Table} from './styled.js'

export default function SimulatorVerde(props){

    const inputs = props.inputs
    const ResultCativo = props.resultCat
    const ResultLivre = props.resultLiv
    const ape = props.ape

    const {cativoDemandaUnica,cativoDemandaUltrapassagem,cativoConsumoPonta,cativoConsumoPontaFora,qtdGerador,
        totalDemandaUnica,totalDemandaUltrapassagem,totalConsumoPonta,totalcativoConsumoPontaFora,totalGerador
        } = ResultCativo

    const {livreDemandaUnica,livreConsumoPonta,livreConsumoPontaFora,livreGerador,energiaACL,
                    tarifaLivreDemandaUnica,tarifaLivreConsumoPonta,tarifaLivreConsumoForaPonta,
                    custoGeracaoDisel,energiaACLTarifa,totalLivreDemanda,totalLivreConsumoPonta,
                    totalLivreConsumoForaPonta,totalLivreGerador,totalEnergiaACL,totalCativo,totalLivre,
                    economiaLivre,economiaPorcentagem
          } = ResultLivre 

    const {energiaGeracao,tarifaEnergiaGeracao,totalEnergiaGeracao,energiaComplemento,
           energiaComplementoTarifa,totalEnergiaComplemento,livreIcms,totalEnergiaIcms,TFSE,ccee} = ape

    const{cliente, cnpj, distribuidora, ths, grupoTarifa, demanda, demandaFpu, consumoP, consumoPf, demandaP,
                demandaPu, usaGerador, geradorACL, consumoGerador, desconto} = inputs
    return(
        <Table>
            <table border="2px">
                <tr>
                    <td>Cativo</td>
                    <td>Qtd</td>
                    <td>Tarifa</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Demanda:</td>
                    <td>{demanda}</td>
                    <td>{cativoDemandaUnica}</td>
                    <td>{totalDemandaUnica}</td>
                </tr>
                <tr>
                    <td>Demanda Ultrapassagem:</td>
                    <td>{demandaFpu}</td>
                    <td>{cativoDemandaUltrapassagem}</td>
                    <td>{totalDemandaUltrapassagem}</td>
                </tr>
                <tr>
                    <td>Consumo ponta:</td>
                    <td>{consumoP}</td>
                    <td>{cativoConsumoPonta}</td>
                    <td>{totalConsumoPonta}</td>
                </tr>
                <tr>
                    <td>Consumo ponta Fora:</td>
                    <td>{consumoPf}</td>
                    <td>{cativoConsumoPontaFora}</td>
                    <td>{totalcativoConsumoPontaFora}</td>
                </tr>
                <tr>
                    <td>Gerador:</td>
                    <td>{qtdGerador}</td>
                    <td>{custoGeracaoDisel}</td>
                    <td>{totalGerador}</td>
                </tr>
                <tr>
                    <tr>Total:{totalCativo}</tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tr>
            </table>
            <table border="2px">
                <tr>
                    <td>Livre</td>
                    <td> Qtd</td>
                    <td> tarifa</td>
                    <td>total</td>
                </tr>
                <tr>
                    <td>Demanda:</td>
                    <td>{livreDemandaUnica}</td>
                    <td>{tarifaLivreDemandaUnica}</td>
                    <td>{totalLivreDemanda}</td>
                </tr>
                <tr>
                    <td>Consumo Ponta:</td>
                    <td>{livreConsumoPonta}</td>
                    <td>{tarifaLivreConsumoPonta}</td>
                    <td>{totalLivreConsumoPonta}</td>
                </tr>
                <tr>
                    <td>Consumo Fora Ponta:</td>
                    <td>{livreConsumoPontaFora}</td>
                    <td>{tarifaLivreConsumoForaPonta}</td>
                    <td>{totalLivreConsumoForaPonta}</td>
                </tr>
                <tr>
                    <td>Gerador:</td>
                    <td>{livreGerador}</td>
                    <td>{custoGeracaoDisel}</td>
                    <td>{totalLivreGerador}</td>
                </tr>
                <tr>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                </tr>
                <tr>
                    <td>Energia Geração:</td>
                    <td>{energiaGeracao}</td>
                    <td>{tarifaEnergiaGeracao}</td>
                    <td>{totalEnergiaGeracao}</td>
                </tr>
                <tr>
                    <td>Energia Complemento:</td>
                    <td>{energiaComplemento}</td>
                    <td>{energiaComplementoTarifa}</td>
                    <td>{totalEnergiaComplemento}</td>
                </tr>
                <tr>
                    <td>Energia Icms:</td>
                    <td>{energiaComplemento}</td>
                    <td>{livreIcms}</td>
                    <td>{totalEnergiaIcms}</td>
                </tr>
                <tr>
                    <td>TFSEE</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td>{TFSE}</td>
                </tr>
                <tr>
                    <td>CCEE</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td>{ccee}</td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td>{totalLivre}</td>
                </tr>
                <tr>
                    <td>Economia:</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td>{economiaLivre}</td>
                </tr>
                <tr>
                    <td>Porcetagem:</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td>{economiaPorcentagem}</td>
                </tr>
            </table>
        </Table>

    )

    
}
