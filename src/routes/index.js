import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  );
}
