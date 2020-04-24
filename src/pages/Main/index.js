import React from 'react'
import NavBar from './navBar.js'
import {VideoContainer,Container,TextBoxContainer,Button,H1,DivMap} from './styles.js'
import Video from '../../Assets/video.mp4'
import ImgML from '../../Assets/energyML.jpg'
import Grid from '@material-ui/core/Grid';
import ImgAutoPro from '../../Assets/selfProductor.jpg'
import Map from '../../Assets/map.svg'

export default function Main(){
    return(
            <div className="index-container">
                
                <Grid container>
                    <Grid item md={12} xs={12}>
                        <NavBar></NavBar>
                    </Grid>
                        <Grid item md={12} xs={12}>
                            <VideoContainer>
                            
                                <video preload="true" autoplay="autoplay" muted loop >
                                    <source src={Video} type="video/mp4"/>
                                </video>                         
                            </VideoContainer>
                        </Grid>

                    <Container BGcolor="#D6D8D8" height={30}>
                        <div><img src={ImgML} alt="mercado livre"/></div>
                        <TextBoxContainer>
                            <H1 Color="#B1945E">Mercado Livre de Energia</H1>
                            <span>
                                O mercado livre é um ambiente de comercialização onde o consumidor pode escolher seu fornecedor de energia de energia, além de receber vários incentivos e até vender sua energia excedente.
                                No mercado livre, as economias médias chegam a 30% dependendo do perfil de consumo e outras condições específicas de cada consumidor.
                            </span>
                            <Button BorderColor="#B1945E" Color="black" fontColor="#FFF" BorderColorHover="#6D7272" ColorHover="#fff" fontColorHover="#6D7272">Saiba mais</Button>
                        </TextBoxContainer>
                    </Container>

                    <Container BGcolor="#FFF" height={30}>
                        <TextBoxContainer>
                            <H1>Mercado Livre de Energia</H1>
                            <span>
                                O mercado livre é um ambiente de comercialização onde o consumidor pode escolher seu fornecedor de energia de energia, além de receber vários incentivos e até vender sua energia excedente.
                                No mercado livre, as economias médias chegam a 30% dependendo do perfil de consumo e outras condições específicas de cada consumidor.
                            </span>
                            <Button BorderColor="#B1945E" Color="black" fontColor="#FFF" BorderColorHover="#6D7272" ColorHover="#fff" fontColorHover="#6D7272">Saiba mais</Button>
                        </TextBoxContainer>
                        <div><img src={ImgAutoPro} alt="Autoprodutor"/></div>
                    </Container>
                    
                    <Container BGcolor="#B1945E" height={30}>
                        <TextBoxContainer fontColor="#FFF" fontsize={20}>
                            <H1 Color="#FFF" Size={1}>Soluções simples e elegantes</H1>

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

                        </TextBoxContainer>
                        <DivMap>
                            <H1 Color="#373E44 ">Soluções simples e elegantes</H1>
                            <img src={Map} alt="mapa"/>
                        </DivMap>
                    </Container>


                



                 </Grid>   

            </div>
    )
}


