import React from 'react'
import api from '../../Services/api'

export default function MercadoLivre(){
    async function handleClick(e){
        e.preventDefault()
    try {
        const results = await api.get('elivelton');
        console.log(results)
      } catch (err) {
        alert('Erro, tente novamente.');
      }
    }

    return(
        <div>
           <h1> Projetos work in progress</h1> 
            <form onSubmit={handleClick}>
                <button type="submit"></button>
            </form>

        </div>
        
    )
}