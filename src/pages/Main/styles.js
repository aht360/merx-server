import styled from 'styled-components'


export const Body = styled.div`
    width:100%;
    height:100%;
`


export const Containers = styled.div`
    width:${props=>props.width};
    height:${props=>props.height};
    background-color:${props=>props.BgColor};
    color: ${props=>props.color};
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;

    .line{
        width:1px;
        height:200px;
        border:1px solid #C4C4C4;
    }
`
export const Infos = styled.div`
    width:40%;
    height:350px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    text-align:center;
    font-size:18px;
    color:#515151;

    button{
        border:none;
        display:flex;
        align-items:center;
        background-color:#FFFFFF;
        align-items:center;
        cursor:pointer;
        color:#0067CC;
    }
    
`
export const Pictures = styled.div`
    height:450px;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items: center;

    img{
        width:40%;
        height:80%;
    }
`
export const Text = styled.div`
    font-size:18px;
    text-align:justify;
    height:70%;
    width:40%;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    
    p{ font-size:24px; }

`
export const ContainerIcon = styled(Containers)`
    width:100%;
    height:600px;
    display:flex;
    justify-content:space-evenly;
    font-size:18px;
    h1{
        font-size:56px;
    }
    div{
        width:50%;
    }
    .title{
        width:40%;
    }
`
export const Icons = styled.div`
        width:100%;
        height:80%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;       
        text-align: justify;
        
    div{
        width:60%;
        height:30%;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;    

        img{
            margin:20px;
            width:100px;
            height:100px;
        }      
    }

`