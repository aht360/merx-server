import styled from 'styled-components'


export const MidiaBar = styled.div`
    background: #373E44;
    width:100%;
    color: #D6D8D8;
    font-size: 14px;
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

    img{
        height:100%;
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


