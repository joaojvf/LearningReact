import React, { memo } from 'react'
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'

import Home from './views/Home'
import CadastroProdutos from './views/Produtos/CadastroProdutos'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact={true} path="/cadastro-produtos"
                    component={CadastroProdutos} />
                <Route exact path="/"
                    component={Home} />
            </Switch>
        </HashRouter>
    )
}