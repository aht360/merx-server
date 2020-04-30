import React from 'react'
import {Table} from './styled.js'

export default function Simulator(props){

    const inputs = props.inputs
    const results = props.results

    const {tarifaDemanda,tarifaUltDem,tarifaConsumoPonta,tarifaConsumoForaPonta,totalDemanda,totalUltDem,totalConsumoPonta,totalConsumoForaPonta,totalGerador,total} = results
    const {demanda,demandaUlt,consumoPonta,consumoPontaFora,usaGerador,consumoGerador,custoGeracaoDisel,distribuidora,grupoTarifa,icms,pis,cofin,fonte} = inputs
    return(
        <Table>
            <table border="2px">
                <tr>
                    <td>Cativo</td>
                    <td>Qtd</td>
                    <td>Tarifa</td>
                    <td>$</td>
                </tr>
                <tr>
                    <td>Demanda:</td>
                    <td>{demanda}</td>
                    <td>{tarifaDemanda}</td>
                    <td>{totalDemanda}</td>
                </tr>
                <tr>
                    <td>Ultrapassagem Dem:</td>
                    <td>{demandaUlt}</td>
                    <td>{tarifaUltDem}</td>
                    <td>{totalUltDem}</td>
                </tr>
                <tr>
                    <td>Consumo Ponta:</td>
                    <td>{consumoPonta}</td>
                    <td>{tarifaConsumoPonta}</td>
                    <td>{totalConsumoPonta}</td>
                </tr>
                <tr>
                    <td>Consumo Fora Ponta:</td>
                    <td>{consumoPontaFora}</td>
                    <td>{tarifaConsumoForaPonta}</td>
                    <td>{totalConsumoForaPonta}</td>
                </tr>
                <tr>
                    <td>gerador:</td>
                    <td>{consumoGerador}</td>
                    <td>{custoGeracaoDisel}</td>
                    <td>{totalGerador}</td>     
                </tr>
                <tr>
                    <td>Total:</td>
                    <td> xx</td>
                    <td> xx</td>
                    <td>{total}</td>
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
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Consumo Ponta:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Consumo Fora Ponta:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Gerador:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Energia ACL:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>ICMS</td>
                    <td></td>
                    <td></td>
                    <td></td>
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
                    <td></td>
                </tr>
                <tr>
                    <td>Economia:</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td></td>
                </tr>
            </table>
        </Table>

    )

    
}
