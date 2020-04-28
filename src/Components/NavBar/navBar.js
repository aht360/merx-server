import React from 'react'
import {Containers,MidiaContainer,ButtonRound,ButtonMenu,MenuContainer,ButtonFatura} from './styles.js'
import {FaInstagramSquare,FaLinkedin,FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillPersonFill} from 'react-icons/bs'
import Logo from '../../Assets/logo.jpg'
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div>
            <Containers height="45px" BgColor="#343E45" color="#D6D8D8" className="midia-bar">
                <MidiaContainer>
                    <div>
                        <FaMapMarkerAlt size={18} color="#D6D8D8"/><span> Rua Min Nelson Hungria - Recife</span>
                    </div>
                
                    <div className="phones">
                        <div><FaPhoneAlt size={18} color="#D6D8D8"/><span>+55 81 30192097</span></div>
                        <div><IoLogoWhatsapp size={18} color="#D6D8D8"/><span>+55 81 986665303</span></div>
                    </div>
                    <div className="button-client">
                        <a href="https://www.linkedin.com/company/merxenergia"><FaLinkedin size={24} color="#D6D8D8"></FaLinkedin></a>
                        <a href="https://instagram.com/merxenergia?igshid=1onuejcw3a8in"><FaInstagramSquare size={24} color="#D6D8D8"></FaInstagramSquare></a>
                        <ButtonRound BorderColor="#343E45" BgColor="#D6D8D8" Color="#343E45" BgColorHover="#6D7272" ColorHover="#D6D8D8">Área Exclusiva <BsFillPersonFill size={13}/></ButtonRound>
                    </div>
                </MidiaContainer>
            </Containers>

            <Containers height="80px" BgColor="#FFF" color="#343E45">
                <MenuContainer>

                    <Link to="/"><img src={Logo} alt="Logo Merx"/></Link>                  
                    <div className="menu">
                        <Link to="/mercado_livre"><ButtonMenu BorderColor="#fff">MERCADO LIVRE ENERGIA</ButtonMenu></Link>
                        <Link to="/autoproducao"><ButtonMenu BorderColor="#fff">AUTOPRODUÇÃO DE ENERGIA</ButtonMenu></Link>
                        <Link to ="/projetos"><ButtonMenu BorderColor="#fff">NOSSOS PROJETOS</ButtonMenu></Link>
                       <Link to="/simulacao"><ButtonFatura BorderColor="#fff">SIMULE SUA FATURA</ButtonFatura></Link> 
                            <div className="hamburger">
                                <GiHamburgerMenu size={18}></GiHamburgerMenu>
                            </div>
                        
                    </div>    
                    
                </MenuContainer>
            </Containers>
        </div>
    )
}