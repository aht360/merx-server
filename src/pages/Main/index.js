import React from 'react'
import NavBar from './navBar.js'
import {VideoContainer,InfoContainer,Container,TextBoxContainer,Button} from './styles.js'
import Video from '../../Assets/video.mp4'
import InfoBoard from './info'
import ImgML from '../../Assets/energyML.jpg'
import Grid from '@material-ui/core/Grid';
import ImgAutoPro from '../../Assets/selfProductor.jpg'

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
                    <InfoContainer>
                        <div>
                            <InfoBoard></InfoBoard>   
                        </div>    
                    </InfoContainer>

                    <Container BGcolor="#373E44" height={30}>
                        <div><img src={ImgML} alt="mercado livre"/></div>

                        <TextBoxContainer>
                            <h1>Mercado Livre de Energia</h1>
                            <span>
                                O mercado livre é um ambiente de comercialização onde o consumidor pode escolher seu fornecedor de energia de energia, além de receber vários incentivos e até vender sua energia excedente.
                                No mercado livre, as economias médias chegam a 30% dependendo do perfil de consumo e outras condições específicas de cada consumidor.
                            </span>
                            <Button BorderColor="#B1945E" Color="black" fontColor="#FFF" BorderColorHover="#6D7272" ColorHover="#fff" fontColorHover="#6D7272">Saiba mais</Button>
                        </TextBoxContainer>
                    </Container>
                    <Container BGcolor="#FFF" height={30}>
                        
                        <TextBoxContainer>
                            <h1>Mercado Livre de Energia</h1>
                            <span>
                                O mercado livre é um ambiente de comercialização onde o consumidor pode escolher seu fornecedor de energia de energia, além de receber vários incentivos e até vender sua energia excedente.
                                No mercado livre, as economias médias chegam a 30% dependendo do perfil de consumo e outras condições específicas de cada consumidor.
                            </span>
                            <Button BorderColor="#B1945E" Color="black" fontColor="#FFF" BorderColorHover="#6D7272" ColorHover="#fff" fontColorHover="#6D7272">Saiba mais</Button>
                        </TextBoxContainer>
                        <div><img src={ImgAutoPro} alt="Autoprodutor"/></div>
                    </Container>




                 </Grid>   

            </div>
    )
}


