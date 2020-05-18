import React from 'react'
import Logo from '../../Assets/blackLogo.png'
import {FooterDiv,Span,Margin} from './styles.js'
import {FaWhatsapp} from 'react-icons/fa'
import {RiMapPinLine,RiPhoneLine} from 'react-icons/ri'



export default function Footer(){
    return(
        <Margin>
            <FooterDiv>
                <img src={Logo} alt="Logo"/>
                <span><RiMapPinLine/>Rua Ministro Nelson Hungria, 180</span>
                <span><RiPhoneLine/>+55 81 30192097</span>
                <span><FaWhatsapp/>+55 81 986665303</span>
                <span>Recife - PE</span>
            </FooterDiv>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Span>2020 | A MERX é uma plataforma de tecnologia que descomplica o mercado de energia  de forma simples, sem carência, sem franquia e sem burocracia.</Span>
            <br></br>
            <br></br>
        </Margin>
    )
}