import React, { memo } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import CadastroProdutos from "./views/Produtos/CadastroProdutos";
import ConsultaProdutos from "./views/Produtos/Consulta";

export default () => {
  return (
    <Switch>
      <Route
        exact={true}
        path="/cadastro-produtos"
        component={CadastroProdutos}
      />
      <Route
        exact={true}
        path="/consulta-produtos"
        component={ConsultaProdutos}
      />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
