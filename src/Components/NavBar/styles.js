import styled from 'styled-components'

export const Containers = styled.div`
    width:100%;
    height:${props=>props.height};
    background-color:${props=>props.BgColor};
    color: ${props=>props.color};
    display:flex;
    justify-content:flex-end;
    align-items: center;
    nav{
        width:80%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
    }
    button{
        border:none;
        border-bottom:2px solid #FFFFFF;
        padding:5px 10px;
        color:#FFFFFF;
        background-color:#0067CC;
        font-size:15px;
        cursor:pointer;
    }

`