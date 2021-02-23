import React, { useState } from "react";
import FormField from "../FormFieldPandora";

import { Container, ContainerInput } from "./styles";

export default function index({
  titulo,
  option,
  sizeValue,
  sizeMax,
  optionPadrao,
  dados,
}) {
  const [focus, setFocus] = useState(false);

  let options = null;

  if (dados) {
    options = dados.map((item) => (
      <option value={item.id} key={item.id}>
        {item.nome}
      </option>
    ));
  }

  if (!optionPadrao) {
    optionPadrao = "Selecione";
  }

  return (
    <FormField sizeValue={sizeValue} sizeMax={sizeMax}>
      <Container>
        <div>{titulo}</div>
        <ContainerInput>
          <select>
            <option value="">{optionPadrao}</option>
            {options}
          </select>
        </ContainerInput>
      </Container>
    </FormField>
  );
}
