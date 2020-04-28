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
    padding: 10px 15px;
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
