import React from 'react'
import './style.css'
import logoImg from '../../Assets/logo.jpg'
import {FiPhone} from 'react-icons/fi'
import {FaWhatsapp,FaInstagramSquare,FaLinkedin} from 'react-icons/fa'
import Info from './info'
import video from '../../Assets/video.mp4'
import MLenergyImg from '../../Assets/energyML.jpg'
import selfProductor from '../../Assets/selfProductor.jpg'
import mapSvg from '../../Assets/map.svg'


export default function Main(){
    return(
        <div className="index-container">
            <div className="menu-container">
                <div className="logo">
                    <a href="/"><img src={logoImg} alt="Merx"/></a>
                </div>
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
            <div className="info-container">
                <p>Conheça os agentes do Ambiente</p><p>de Comercialização Livre</p>
                <div className="info-tab">
                   <Info></Info> 
                </div>      
            </div>

            <div className="MLenergy-container">
                <div className="MLenergy-img">
                    <img src={MLenergyImg} alt="Mercado livre de Energia"></img>
                </div>
                <div className="ML-text">
                    <div><h1>Mercado Livre de Energia</h1></div>
                    <div className="text">
                        &nbsp;&nbsp;&nbsp;&nbsp;O mercado livre é um ambiente de comercialização 
                        onde o consumidor pode escolher seu fornecedor de energia de energia, além de receber vários incentivos e até vender sua energia excedente.
                        No mercado livre, as economias médias chegam a 30% dependendo do perfil de consumo e outras condições específicas de cada consumidor.
                    </div>
                    <div><button>Saiba mais</button></div>
                </div>
            </div>
            <div className="self-productor">
                <div className="selfp-text">
                <div><h1>Autoprodutor de Energia</h1></div>
                    <div className="text">
                    Entre os agentes do ambiente de comercialização livre temos:<p/>
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• Consumidor Livre
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• Consumidor Especial
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• Comercializadores
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• Autoprodutores
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• Produtores independentes de Energia<p/>
                        Os autoprodutores são outra classe de agente que atua no ambiente de contratação livre, eles são consumidores que recebem a concessão ou autorização para produção de energia elétrica destinada ao seu próprio consumo.
                        Os principais atrativos da Autoprodução são:
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• Isenção de encargos setoriais
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• Não recolhe ICMS sobre a energia produzida e consumida entre agentes de mesmo CNPJ. (É necessário verificar a legislação de cada estado).
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• O autoprodutor diminui sua exposição a variações de preços da energia elétrica.
                        <p/>&nbsp;&nbsp;&nbsp;&nbsp;• Aplicação independentemente da localização geográfica.<p/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Os autoprodutores têm o direito de comercializar seus excedentes de energia com outros consumidores livres, especiais, comercializadores e até mesmo outros agentes de geração.Somos especialistas em autoprodução com usinas solares.
                    </div>
                    <div><button>Saiba mais</button></div>
                </div>
                <div className="selfP-img">
                    <img src={selfProductor} alt="Autoprodutor de Energia"/>
                </div>
            </div>

            <div className="map-container">
                <div className="text-map">
                    <div><h1>Soluções simples e elegantes</h1></div>
                        <div className="text">A MERX entende que a sofisticação anda de mãos dadas com a simplicidade.
                        Proporcionamos assistência técnica de forma clara, direta e focada
                        no ultimo resultado para nossos Clientes e Parceiros, que fazem parte 
                        do time MERX.</div>
                        
                        <div  className="text">Oferecemos todo suporte técnico para que sua empresa aproveite as 
                        vantagens do ambiente de contratação livre, seja como cliente final
                        ou parceiros de negocios.</div>
                    </div>
                <div className="map-img">
                    <div>Entre em contanto com  um de nossos consultores!</div>
                    <img src={mapSvg} alt="mapa"/>
                </div>
            </div>
        </div>
    )
}


