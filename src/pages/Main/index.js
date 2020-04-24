import React from 'react'
import NavBar from './navBar.js'
import {VideoContainer,VideoBox,InfoContainer} from './styles.js'
import Video from '../../Assets/video.mp4'
import InfoBoard from './info'

export default function Main(){
    return(
            <div className="index-container">
                <NavBar></NavBar>
                    <VideoContainer>
                        <video preload="true" autoplay="autoplay" muted loop >
                            <source src={Video} type="video/mp4"/>
                        </video>
                        <h1>Somos um time com o objetivo de levar excelência para nossos cliente e parceiros</h1>
                        <div></div>
                    </VideoContainer>
                    <VideoBox></VideoBox>
                    <InfoContainer>
                        <InfoBoard></InfoBoard>
                    </InfoContainer>
                    
                    

            </div>
    )
}


