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
                <span><RiMapPinLine/>Rua Ministro Nelson Hungria, 0000</span>
                <span><RiPhoneLine/>+55 81 30192097</span>
                <span><FaWhatsapp/>+55 81 986665303</span>
                <span>Recife - PE</span>
            </FooterDiv>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Span>2020 | A MERX é uma plataforma unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis e.</Span>
            <br></br>
            <br></br>
        </Margin>
    )
}