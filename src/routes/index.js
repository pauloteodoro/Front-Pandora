import React from "react";
import { Switch, Route } from "react-router-dom";
import Cadastrop2 from "../pages/Cadastrop2";
import DadosPessoais from "../pages/CadastroCliente/DadosPessoais";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/cadastroCliente/DadosPessoais" component={DadosPessoais} />
      <Route path="/cadastrop2" component={Cadastrop2} />
    </Switch>
  );
}
