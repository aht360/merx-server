import styled from 'styled-components'

export const InputContainer = styled.div`
    margin-top: 80px;
    width:100%;
    display:flex;
    justify-content:space-around;

    div{
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items:center;
    }
    
    form{
        width:40%;
        height:800px;
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items:center; 
        border-right:3px solid black;
    }
    input{
        width:300px;
        height:40px;
        font-size:24px;
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
        td{
            padding: 5px 10px;
        }
    }
`