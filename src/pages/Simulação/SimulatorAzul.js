import React from 'react'
import {Table} from './styled.js'

export default function SimulatorVerde(props){

    const inputs = props.inputs
    const ResultCativo = props.resultCat
    const ResultLivre = props.resultLiv

    const {cativoTarifaDemandaPonta,totalCativoUltrapassagemPonta,cativoTarifaUltrapassagemPonta,cativoTarifaDemandaForaPonta,
        cativoTarifaUltrapassagemForaPonta,cativoTarifaConsumoPonta,cativoTarifaConsumoForaPonta,qtdGerador,
        totalCativoDemandaPonta,totalCativoUltrapassagemForaPonta,totalCativoDemandaPontaFora,
        totalCativoConsumoPonta,totalCativoConsumoForaPonta,totalCativoConsumoGerador,totalCativo
     } = ResultCativo

    const {livreDemanda,livreDemandaForaPonta,livreConsumoPonta,livreGerador,livreConsumoForaPonta,
        livreTarifaDemanda,livreTarifaDemandaForaPonta,livreTarifaConsumoPonta,livreTarifaConsumoForaPonta,
        livreTarifaGerador,totalLivreDemanda,totalLivreDemandaForaPonta,totalLivreConsumoPonta,totalLivreConsumoForaPonta,
        totalLivreGerador,energiaACL,energiaACLTarifa,totalEnergiaACL,totalICMS,totalLivre,economia,economiaPorcetagem,livreIcms
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
                    <td>{cativoTarifaDemandaPonta}</td>
                    <td>{totalCativoDemandaPonta}</td>
                </tr>
                <tr>
                    <td>Demanda Ultrapassagem:</td>
                    <td>{demandaPu}</td>
                    <td>{cativoTarifaUltrapassagemPonta}</td>
                    <td>{totalCativoUltrapassagemPonta}</td>
                </tr>
                <tr>
                    <td>Demanda Fora Ponta:</td>
                    <td>{demandaP}</td>
                    <td>{cativoTarifaDemandaForaPonta}</td>
                    <td>{totalCativoDemandaPontaFora}</td>
                </tr>
                <tr>
                    <td>Ultrapassagem Fora Ponta:</td>
                    <td>{demandaFpu}</td>
                    <td>{cativoTarifaUltrapassagemForaPonta}</td>
                    <td>{totalCativoUltrapassagemForaPonta}</td>
                </tr>
                <tr>
                    <td>Consumo ponta:</td>
                    <td>{consumoP}</td>
                    <td>{cativoTarifaConsumoPonta}</td>
                    <td>{totalCativoConsumoPonta}</td>
                </tr>
                <tr>
                    <td>Consumo ponta Fora:</td>
                    <td>{consumoPf}</td>
                    <td>{cativoTarifaConsumoForaPonta}</td>
                    <td>{totalCativoConsumoForaPonta}</td>
                </tr>
                <tr>
                    <td>Gerador:</td>
                    <td>{qtdGerador}</td>
                    <td>{livreTarifaGerador}</td>
                    <td>{totalCativoConsumoGerador}</td>
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
                    <td>{livreDemanda}</td>
                    <td>{livreTarifaDemanda}</td>
                    <td>{totalLivreDemanda}</td>
                </tr>
                <tr>
                    <td>Consumo Ponta:</td>
                    <td>{livreConsumoPonta}</td>
                    <td>{livreTarifaConsumoPonta}</td>
                    <td>{totalLivreConsumoPonta}</td>
                </tr>
                <tr>
                    <td>Consumo Fora Ponta:</td>
                    <td>{livreConsumoForaPonta}</td>
                    <td>{livreTarifaConsumoForaPonta}</td>
                    <td>{totalLivreConsumoForaPonta}</td>
                </tr>
                <tr>
                    <td>Gerador:</td>
                    <td>{livreGerador}</td>
                    <td>{livreTarifaGerador}</td>
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
                    <td>{totalICMS}</td>
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
                    <td>{economia}</td>
                </tr>
                <tr>
                    <td>Porcetagem:</td>
                    <td>xx</td>
                    <td>xx</td>
                    <td>{economiaPorcetagem}</td>
                </tr>
            </table>
        </Table>

    )

    
}
