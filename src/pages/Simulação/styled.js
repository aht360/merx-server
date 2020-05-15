import styled from 'styled-components'

export const InputContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;

    div{
        margin: 10px 0px;
        width: 464px;
        height: 70px;
        display:flex;
        flex-direction:column;

        :last-child{
            align-self:flex-start;
        }
    }   


    input,select{
        background: #FFFFFF;
        border: 1px solid #646464;
        box-sizing: border-box;
        border-radius: 4px;
        width:100%;
        height:100%;
        font-size:20px;
        padding: 0px 5px; 
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }

` 
export const Body = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    height:100%;
    form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    p{
        width:80%;
        text-align:center;
    }    

    button{
        border:none;
        border-bottom:2px solid #000000;
        padding:5px 10px;
        color:#000000;
        background-color:#FFFFFF;
        font-size:15px;
        cursor:pointer;
    }
`

export const Table = styled.div`
    width:60%;
    height:800px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    
    table{
        border-collapse: collapse;
        td,tr,th{
            padding: 5px 10px;
            border:1px solid black;
        }
        th{
            background:black;   
            color:white;
        }
    }

`