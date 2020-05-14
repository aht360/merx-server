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
