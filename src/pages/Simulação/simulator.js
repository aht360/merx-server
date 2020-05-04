import React from 'react'
import {Table} from './styled.js'

export default function Simulator(props){

    const inputs = props.inputs
    const ResultCativo = props.resultCat
    const ResultLivre = props.resultLiv

    const {cativoDemandaUnica,cativoDemandaUltrapassagem,cativoConsumoPonta,cativoConsumoPontaFora,qtdGerador,
        totalDemandaUnica,totalDemandaUltrapassagem,totalConsumoPonta,totalcativoConsumoPontaFora,totalGerador
        } = ResultCativo

    const {livreDemandaUnica,livreConsumoPonta,livreConsumoPontaFora,livreGerador,energiaACL,
                    tarifaLivreDemandaUnica,tarifaLivreConsumoPonta,tarifaLivreConsumoForaPonta,
                    custoGeracaoDisel,energiaACLTarifa,totalLivreDemanda,totalLivreConsumoPonta,
                    totalLivreConsumoForaPonta,totalLivreGerador,totalEnergiaACL,livreIcms,totalIcms,
                    totalCativo,totalLivre,economiaLivre,economiaPorcentagem
            }= ResultLivre 



    const{cliente, cnpj, distribuidora, ths, grupoTarifa, demanda, demandaFpu, consumoP, consumoPf, demandaP,
                demandaPu, usaGerador, geradorACL, consumoGerador, desconto,} = inputs
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
                    <td>{totalLivreConsumoPonta}</td>
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
                    <td>Energia ACL:</td>
                    <td>{energiaACL}</td>
                    <td>{energiaACLTarifa}</td>
                    <td>{totalEnergiaACL}</td>
                </tr>
                <tr>
                    <td>ICMS</td>
                    <td> </td>
                    <td>{livreIcms}</td>
                    <td>{totalIcms}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Total Livre:</td>
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
