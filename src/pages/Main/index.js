import React from 'react'
import NavBar from './navBar.js'
import {VideoContainer,BoxContainer,ButtonFatura,ButtonMenu,ContainersSquares,SolarContainer,NewsLetter,Containers,Footer} from './styles.js'
import Video from '../../Assets/video.mp4'
import ImgML from '../../Assets/energyML.jpg'
import Grid from '@material-ui/core/Grid';
import ImgAutoPro from '../../Assets/selfProductor.jpg'
import Map from '../../Assets/map.svg'
import Solar from '../../Assets/solarpanel.jpg'

export default function Main(){
    return(
            <div className="index-container">

                <NavBar></NavBar>

                    <VideoContainer>
                        <video src={Video} preload="true" autoplay="autoplay" muted loop >
                            <source type="video/mp4"/>
                        </video>   
                    </VideoContainer>
                      
                    <BoxContainer BgColor="#A8ACAC" height="480px" H1Color="#B0935D">
                        <div><img src={ImgML} alt="mercado livre"/></div>
                        <div>
                            <h1>Mercado Livre de Energia</h1>
                            <span>
                                O mercado livre é um ambiente de comercialização onde o consumidor pode escolher seu fornecedor de energia de energia, além de receber vários incentivos e até vender sua energia excedente.
                                No mercado livre, as economias médias chegam a 30% dependendo do perfil de consumo e outras condições específicas de cada consumidor.
                            </span>
                        <ButtonFatura>Saiba mais</ButtonFatura>
                        </div>

                    </BoxContainer>
                    <BoxContainer BgColor="#FFF" height="480px" H1Color="">
                        <div>
                            <h1>Autoprodutor</h1>
                            <span>
                            Os autoprodutores são outra classe de agente que atua no ambiente de contratação livre, 
                            eles são consumidores que recebem a concessão ou autorização para produção de energia elétrica destinada ao seu próprio consumo.
                            </span>
                            <ButtonMenu>Saiba mais</ButtonMenu>                            
                        </div>

                        <div><img src={ImgAutoPro} alt="Autoprodutor"/></div>
                    </BoxContainer>

                    <ContainersSquares BgColor="#B0935D" height="480px" H1Color="#B0935D">

                        <div>
                            <h1 >Soluções simples e elegantes</h1>

                                <p>
                                    A MERX entende que a sofisticação anda de mãos dadas com a simplicidade.
                                    Proporcionalmente assistência técnica de forma clara, direta e focada no resultado
                                    para nossos Clientes e Parceiros, que fazem parte do time MERX.
                                </p>
                                <p>
                                    Oferecemos todo o suporte técnico para que sua empresa aproveite as
                                    vantagens do ambiente de contratação livre, seja como cliente final ou
                                    parceiro de negócios.
                                </p>
                        </div>
                        <div className="map">
                            <h4>Entre em contato com um de nosssos consultores! </h4>
                            <img src={Map} alt="mapa"/>
                        </div>
                    </ContainersSquares>

                <SolarContainer>
                    <img src={Solar} alt="Empresa" className="solar-photo"/>

                    <div>
                        <h1>Quer ser autoprodutor de energia elétrica?</h1>
                        <span>
                        <p>O Autoprodutor é um agente com concessão, permissão ou autorização para produzir energia destinada a seu uso exclusivo, podendo comercializar eventual excedente de energia desde que autorizado pela Aneel.</p>
                            Os principais atrativos da autoprodução são:
                            <lu>
                                <li>Isenção de encargos setoriais</li>
                                <li>nao rocolhe ICMS sobre energia produzida entre agentes de mesmo CNPJ.
                                (É necessário verificar a legislação de cada estado).
                                </li>
                                <li>O autoprodutor diminui sua exposição a variações de preços  da energia eletrica.</li>
                                <li>Aplicação independente da localização geográfica.</li>
                            </lu>
                            Os autoprodutor têm o direito  de comercializar seus excedentes de energia
                            com outros consumidores livres, especiais, comercializadores e até mesmo outros
                            agentes de geração.
                        </span>
                    </div>
                </SolarContainer>
                <BoxContainer color="#B0935D" height="280px">
                    <div className="be-partner">
                        <h1>Faça parte do time MERX</h1>
                        <div className="be-partner-buttons">
                            <ButtonFatura>Quero ser um parceiro</ButtonFatura>
                            <ButtonFatura>Quero ser um cliente</ButtonFatura>
                        </div>
                    </div>
                </BoxContainer>

                <NewsLetter>
                    <div className="newsletter">
                        <div className="newsletter-title">
                            <h1>NewsLetter - </h1><span>Fiquei por dentro das novidades e receba promoções exclusivas.</span>
                        </div>

                        <form id="form-email">
                            <input type="text" placeholder=" Nome"></input>
                            <input type="text" placeholder=" Email"></input> 
                        </form>               
                            <button type="submit" form="form-email">Enviar</button> 
                    </div>
                </NewsLetter>
                <Containers height="300px" BgColor="#343E45">
                </Containers>
                <Footer>
                    <span>© 2020 MERX Energia - Todos os direitos reservados</span>
                </Footer>
            </div>
    )
}


