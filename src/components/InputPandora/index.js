import React, { useState } from "react";
import FormField from "../FormFieldPandora";

import { Container, ContainerInput } from "./styles";

export default function index({
  titulo,
  placeholder,
  type,
  icon: Icon,
  sizeValue,
  sizeMax,
  name,
  onChange
}) {
  const [focus, setFocus] = useState(false);

  return (
    <FormField sizeValue={sizeValue} sizeMax={sizeMax}>
      <Container>
        <div>{titulo}</div>
        <ContainerInput focus={focus}>
          {Icon && <Icon />}
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
          ></input>
        </ContainerInput>
      </Container>
    </FormField>
  );
}
