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
export const ContainerIcon = styled.div`
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
export const ContainerBePartner = styled.div`
    text-align: justify;
    display:flex;
    justify-content: space-evenly;

    h1{ font-size:56px; }
    .title{
        width:30%;
        font-size:18px;
    }
    .buttons{
        font-size:16px;
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
    }

    
`

export const BeClient = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;

    span{ width:30%; }

    button{
        border:none;
        margin: 0px 20px;
        padding:0px 10px;
        font-size:14px;
        color:#FFFFFF;
        background-color:#0067CC;
        cursor:pointer;
    }
    

`

export const Container = styled.div`
    background:#0067CC;
    color: #FFFFFF;
    height:700px;
    font-size:18px;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;

    button{
        background:#0067CC;
        color:#FFFFFF;
        border: none;
        cursor:pointer;
        display:flex;
        align-items:center;
    }
    
    h1{ width:80%; font-size:45px;}

    div:first-child{
        margin-left:60px;
        width:50%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        span{
            width:60%;
            text-align:justify;
        }
    }
    div:last-child{
        width:749px;
        height:623px;
        background:#FFFFFF;
    }

`