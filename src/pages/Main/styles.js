import styled from 'styled-components'

export const Containers = styled.div`
    width:100%;
    height:${props=>props.height};
    background-color:${props=>props.BgColor};
    color: ${props=>props.color};
    display:flex;
    justify-content:space-evenly;
    align-items: center;

`
export const MidiaContainer = styled.div`
    width:96%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .phones{
        div{
            margin:0px 15px;
        }
    }    
    button{
        margin:0px 5px;
    }
`
export const MenuContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;

    img,a{
        height:100%;
        background-color: yellow;
    }
    div{
        width:60%;
        display: flex;
        justify-content:space-evenly;
    }

    .hamburger{
        visibility: hidden;
        width:3%;
        cursor: pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        background: blue;
    }

`
export const BoxContainer = styled.div`
    margin-top: 3rem;
    width:100%;
    height:${props=>props.height};
    background-color:${props=>props.BgColor};
    color: ${props=>props.color};
    display:flex;
    justify-content:space-around;
    align-items: center;
    div{
        width:40%;
        height:80%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;
        text-align:justify;
        font-size:1.4rem;
    }
    img{
        width:80%;
        height:100%;
    }
    h1{
        color:${props=>props.H1Color};
    }
    .be-partner{
        border-top:1px solid black;
        border-bottom:1px solid black;
    }
    .be-partner-buttons{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-items:center;
    }
`
export const ButtonRound = styled.button`
    border: 1px solid ${props=>props.BorderColor};
    background:${props=>props.BgColor};
    color:${props=>props.Color};
    padding: 5px 10px;
    border-radius:25px;
    cursor: pointer;
    transition: background 500ms;
    :hover{
        border-color:${props=>props.BorderColorHover};
        color:${props=>props.ColorHover};
        background-color:${props=>props.BgColorHover};
    }
`
export const ButtonMenu = styled.button`
    border:1px solid;
    border-color:${props=>props.BorderColor};
    color: #6D7272;
    background-color:#fff;
    padding: 5px 10px;
    cursor: pointer;
    transition: background 500ms;
    :hover{
        border:1px solid #fff;
        background-color:#6D7272 ;
        color: #fff;
    }
`
export const ButtonFatura = styled.button`
    border:1px solid #fff;
    color: #fff;
    background-color:#B0935D;
    padding: 10px 15px;
    cursor: pointer;
    transition: background 500ms,;
    :hover{
        border:1px solid #B0935D;
        background:#fff ;
        color: #B0935D;
    }
`
export const VideoContainer = styled.div`
    margin-top: 3rem;
    width:100%;
    display:flex;
    justify-content: space-evenly;
    height:400px;
    background-color:#FFF;
    video{
        width:80%;
        object-fit:fill;
    }
`
export const ContainersSquares = styled.div`
    margin-top: 3rem;
    width:100%;
    height:${props=>props.height};
    background-color:${props=>props.BgColor};
    color: ${props=>props.color};
    display:flex;
    justify-content:space-around;
    align-items: center;
    margin-bottom:5rem;

    img{
        width:100%;
        height:120%;
    }
    h4{
        color:#343E45;
    }
    div{
        margin-left:20px;
        font-size:1.5rem;
        height:100%;
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        text-align:justify;
        color:#fff;
    }
    .map{
        margin-top:10rem;
    }
`

export const SolarContainer = styled.div`
    width:100%;
    height:680px;
    color: #343E45;
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    font-size:1.2rem;
    div{
        width:40%;
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content:space-evenly;

    }
    img{
        width:40%;
        height:50%;
        box-shadow: -15px -15px 15px rgba(0,0,0,0.5);
    }
    h1{
        color:#B0935D;
    }
`
export const NewsLetter = styled.div`
    width: 100%;
    height:400px;
    display:flex;
    justify-content: space-evenly;
    margin-bottom: -15rem;
    .newsletter{
        width:100%;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items:center;
        font-size:1.5rem;
        color:#343E45;
        width:90%;
        height:100%;
        background-color: #D6D8D8;

        .newsletter-title{
            width:90%;
            display:flex;
            align-items:center;
            span{
                margin-left: 10px;
            }
        }
        input{
            width:43%;
            height:50px;
            font-size:1.4rem;
            background-color:#D6D8D8;
            border-radius: 5px;
            border:1px solid #343E45;
        }
        form{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            justify-content: space-evenly;
        }    
        button{
            border:1px solid #fff ;
            color: #fff;
            background-color:#B0935D;
            padding: 20px 100px;
            cursor: pointer;
            transition: background 500ms;
            :hover{
                border:1px solid #B0935D;
                background:#fff ;
                color: #B0935D;
            }
        }
    }
    h1{
        font-size:3rem;
    }
` 
export const Footer = styled.div`
    width:100%;
    height:15vh;
    background:#343E45;
    border-top:1px solid #6D7272;
    color:#B0935D;
    display:flex;
    justify-content:center;
    align-items: center;
`
