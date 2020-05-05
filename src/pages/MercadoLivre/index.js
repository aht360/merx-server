import React from 'react'
import api from '../../Services/api'

export default function MercadoLivre(){

    async function handleSubmit(e){
        e.preventDefault();
    
        try {
            const results = await api.get('simulacao');

          } catch (err) {
            alert('Erro, tente novamente.');
          }
    }

    return(
        <div>
            <h1> Mercado Livre work in progress</h1>
            <form onSubmit>
                
            </form>
        </div>
        
    )
}