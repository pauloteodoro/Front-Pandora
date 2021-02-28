import React from "react";
import { Switch, Route } from "react-router-dom";
import Cadastrop2 from "../pages/Cadastrop2";
import DadosPessoais from "../pages/CadastroCliente/DadosPessoais";
import Documentos from "../pages/CadastroCliente/Documentos";
import Enderecos from "../pages/CadastroCliente/Enderecos";
import CartaoCredito from "../pages/CadastroCliente/Cartao";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/cadastroCliente/DadosPessoais" component={DadosPessoais} />
      <Route path="/cadastroCliente/Documentos" component={Documentos} />
      <Route path="/cadastroCliente/Enderecos" component={Enderecos} />
      <Route path="/cadastroCliente/Cartao" component={CartaoCredito} />


    </Switch>
  );
}
