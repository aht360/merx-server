import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Main from './pages/Main/index.js'
import MercadoLivre from './pages/MercadoLivre/index.js'
import AutoProducao from './pages/Autoproducao/index.js'
import Projetos from './pages/Projetos/index.js'
import Simulacao from './pages/Simulação/index.js'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/mercado_livre" component={MercadoLivre}/>
                <Route path="/autoproducao" component={AutoProducao}/>
                <Route path="/projetos" component={Projetos}/>
                <Route path="/simulacao" component={Simulacao}/>

            </Switch>
        </BrowserRouter>
    )
}