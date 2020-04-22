import React from 'react'
import './style.css'
import logoImg from '../../Assets/logo.jpg'
import {FiPhone} from 'react-icons/fi'
import {FaWhatsapp,FaInstagramSquare,FaLinkedin} from 'react-icons/fa'
import Info from './info'
import video from '../../Assets/video.mp4'


export default function Main(){
    return(
        <div className="index-container">
            <div className="menu-container">

                <div className="logo"><a href="/"><img src={logoImg} alt="Merx"/></a></div>

                <div className="nav-container">
                    <div className="links-container">
                        <div className="button-div"><button>MERCADO LIVRE DE ENERGIA</button></div>
                        <div className="button-div"><button>AUTOPRODUÇÃO DE ENERGIA</button></div>
                        <div className="button-div"><button>NOSSOS PROJETOS</button></div>
                        <div className="button-simulator"><button>SIMULE SUA FATURA</button></div>
                        <div className="button-client"><button>ÁREA EXCLUSIVA</button></div>
                    </div>
                    <div className="midia-container">
                        <div><FaWhatsapp size={24} color="#B0935D"/></div><b>&nbsp;&nbsp;+55 81 986665303</b>
                        <div><FiPhone size={24} color="#B0935D"/></div><b>&nbsp;&nbsp;+55 81 30192097</b>
                        <div className="social-midia">
                            <div><a href="https://instagram.com/merxenergia?igshid=1onuejcw3a8in"><FaInstagramSquare size={25} color="#373E44"/></a></div>
                            <div><a href="https://www.linkedin.com/company/merxenergia"><FaLinkedin size={25} color="#373E44"/></a></div>
                        </div>

                    </div>     
                </div>
            </div>
            <div className="imageBg-container">    
                <video loop autoplay autoPlay id="bg-video" > 
                    <source src={video} type="video/mp4"/>    
                </video>             
                <h1>Somos um time com o objetivo de levar excelência para nossos clientes e parceiros</h1>
            </div>
            <div className="squares-container">
                <div className="ML-energy">
                    <b><p>Mercado</p><p>Livre de</p><p>Energia</p></b>
                </div>
                <div className="selfProductor">
                    <b><p>Autoprodutor de</p><p>Energia</p></b>
                </div>
            </div>
            <div className="info-container">
                <p>Conheça os agentes do Ambiente</p><p>de Comercialização Livre</p>
                <div className="info-tab">
                   <Info></Info> 
                </div>
                
            </div>
            <div className="map-container">
                <div className="text-map">

                </div>

            </div>
        </div>
    )
}


