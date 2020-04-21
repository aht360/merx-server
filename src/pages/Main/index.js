import React from 'react'
import './style.css'
import logoImg from '../../Assets/logo.jpg'
import {FiPhone,FiInstagram} from 'react-icons/fi'
import {FaWhatsapp} from 'react-icons/fa'
import Info from './info'


export default function Main(){
    return(
        <div className="index-container">
            <div className="menu-container">
                <div className="logo">
                    <a href="/"><img src={logoImg} alt="Merx"/></a>
                </div>
                <div className="nav-container">
                    <nav>
                        <button>MERCADO LIVRE DE ENERGIA</button>
                        <button>AUTOPRODUÇÃO DE ENERGIA</button>
                        <button>SOLUÇÕES</button>
                        <button>NOSSOS PROJETOS</button>
                        <div className="contact-container">
                            <b className="instagram-color"><FiInstagram size={24} color="#373E44"/><b className="instagram">in</b>@someinstagram</b>
                            <b><FaWhatsapp size={24} color="#B0935D"/>+55 81 986665303</b>
                            <b><FiPhone size={24} color="#B0935D"/>+55 81 30192097</b>
                        </div>

                    </nav>
                </div>
                    <div className="button-client">
                        <button>ÁREA EXCLUSIVA</button> 
                    </div>

            </div>
            <div className="imageBg-container">                 
                <h1>Somos um time com o objetivo de levar excelência para nossos clientes e parceiros</h1>
            </div>
            <div className="squares-container">
                <div className="ML-energy">
                    <b><p>Mercado</p><p>Livre de</p><p>Energia</p></b>
                </div>
                <div className="selfProductor">
                    <b><p>Auto</p><p>Produtor de</p><p>Energia</p></b>
                </div>
            </div>
            <div className="info-container">
                <p>Conheça os agentes do Ambiente</p><p>de Comercialização Livre</p>
                <div className="info-tab">
                   <Info></Info> 
                </div>
                
            </div>
            <div className="map-container">
                
            </div>
        </div>
    )
}