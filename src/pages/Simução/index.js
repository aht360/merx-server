import React from 'react'
import NavBar from '../../Components/NavBar/navBar.js'
import {InputContainer} from './styled.js'

export default function MercadoLivre(){
    return(
        <div>
            <NavBar/>
            <InputContainer>
                <input type="text" placeholder=" Demanda"/>
                <input type="text" placeholder=" Demanda Ultrapassagem"/>
                <input type="text" placeholder=" Consumo de ponta"/>
                <span>Usa Gerador:
                <select id="usa-gerador">
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select></span>
            </InputContainer>
        </div>
    )
}