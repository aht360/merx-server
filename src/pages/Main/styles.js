import styled from 'styled-components'

export const MidiaBar = styled.div`
    background: #373E44;
    width:100%;
    color: #D6D8D8;
    font-size: 1rem;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{   
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    span{
        margin: 0px 20px 0px 5px;
    }
    button{
        background-color: #D6D8D8;
        color:#B1945E;
        border:none;
        border-radius: 25px;
        padding: 10px 15px; 
        transform: background 0.5s;
    }
    button:hover{
        color: #D6D8D8;
        background:#B1945E;
    }
`


export const MapIcon = styled.div`
        margin: 0px 0px 0px 40px;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
    margin:0px 20px;

    div{
        display:flex;
        align-items: center;
        margin: 0px 10px;
    }
    a{
        margin: 5px;
    }
`
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    height: 80px;

    a{
        height:80px;
    }
    img{
        height:100%
    }
`
export const MenuButton = styled.button`
        border:none;
        padding: 8px 10px;
        margin:0px 10px;
        color:#373E44;
        background: #fff;
        transition: background 0.5s;
        
        &:hover{
            background:#373E44;
            color:#fff;
        } 
`   

export const SimulationButton = styled.button`
    border: 1px solid #373E44;
    border-radius:25px;
    padding:8px 10px;
    margin: 0px 10px;
    color: #fff;
    background: #373E44;
    transition: background 0.5s;

    &:hover{
    border: 1px solid #373E44;
    border-radius: 25px;
    background:#fff;
    border: 1px solid #373E44;
    color:#373E44;
    }   
`
export const VideoContainer = styled.div`
    position:static;
    margin-top:60px;
    width:100%;
    display:flex;
    justify-content:center;
    height:400px;

    video{
        width:85%;
        object-fit: fill;
    }

`

export const InfoContainer = styled.div`
    margin-top:3em;
    margin-left:10em;
    display:flex;
    justify-content: space-around;
    align-items: center;
    
    div{
        display:flex;
        justify-content: center;
        align-items: center;
    }
`
export const InfoText= styled.div`
    width: 700px;
    text-align: center;
`
export const Container =styled.div`
    margin-top:6em;
    background-color: ${props=>props.BGcolor};
    height: ${props=>`${props.height}em`};
    width:100%;
    font-size:${props=>`${props.fontSize}em`};
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    text-align:center;
    
    img{
        width:80%;
        height:80%;
    }
`

export const TextBoxContainer = styled.div`
    margin-top: 4em;
    width:50%;
    height:100%;
    text-align: center;
    color: ${props=>props.fontColor};
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`
export const Button = styled.button`
    border: 1px solid ${props=>props.BorderColor};
    color: ${props=>props.fontColor};
    background-color:${props=>props.Color};
    padding: 10px;
    transition: background 0.5s;
    &:hover{
        border: 1px solid ${props=>props.BorderColorHover};
        background:${props=>props.ColorHover};;
        color:${props=>props.fontColorHover};;
    }   
`