import React from 'react'
import {MidiaBar,MapIcon,ButtonContainer,MenuContainer,SimulationButton,MenuButton} from './styles.js'
import {FaInstagramSquare,FaLinkedin,FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFillPersonFill} from 'react-icons/bs'
import Logo from '../../Assets/logo.jpg'

export default function NavBar(){
    return(
        <div>
            <MidiaBar>
                <MapIcon>
                    <span><FaMapMarkerAlt size={18} color="#D6D8D8"/> Rua Min Nelson Hungria - Recife</span>
                </MapIcon> 
                <div>
                    <FaPhoneAlt size={18} color="#D6D8D8"/><span>   +55 81 30192097</span>
                    <IoLogoWhatsapp size={18} color="#D6D8D8"/><span>   +55 81 986665303</span>
                </div>
                <ButtonContainer>
                    <div>
                        <a href="https://www.linkedin.com/company/merxenergia"><FaLinkedin size={24} color="#D6D8D8"></FaLinkedin></a>
                        <a href="https://instagram.com/merxenergia?igshid=1onuejcw3a8in"><FaInstagramSquare size={24} color="#D6D8D8"></FaInstagramSquare></a>
                    </div>  
                    <button> Área Exclusiva <BsFillPersonFill size={13}/></button>
                </ButtonContainer>
            </MidiaBar>
            
            <MenuContainer>
                <img src={Logo} alt="Logo Merx"/>
                <div>
                    <MenuButton>MERCADO LIVRE ENERGIA</MenuButton>
                    <MenuButton>AUTOPRODUÇÃO DE ENERGIA</MenuButton>
                    <MenuButton>NOSSOS PROJETOS</MenuButton>
                    <SimulationButton>SIMULE SUA FATURA</SimulationButton>
                </div>
                
            </MenuContainer>

        </div>
    )
}