import React from 'react'
import {Containers} from './styles.js'
import {FaInstagramSquare,FaLinkedin,FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillPersonFill} from 'react-icons/bs'
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <div>
            <Containers height="59px" BgColor="#0067CC" color="#FFFFFF">
                <nav>
                    <Link to="/"><button>Início</button></Link>
                    <Link to="/mercado_livre"><button>Mercado livre de energia</button></Link>
                    <Link to="/autoproducao"><button>Autoprodução de energia</button></Link>
                    <Link to="/simulacao"><button>Simulação</button></Link>
                    <Link to="/"><button>Contato</button></Link>
                    <Link to="/"><button>Login</button></Link>
                </nav>

            </Containers>
        </div>
    )
}