import React, { useState } from "react";

import { Container, ContainerInput } from "./styles";

export default function index({ titulo, placeholder, type, icon: Icon }) {
  const [focus, setFocus] = useState(false);

  return (
    <Container>
      <div>{titulo}</div>
      <ContainerInput focus={focus}>
        {Icon && <Icon />}
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          type={type}
          placeholder={placeholder}
        ></input>
      </ContainerInput>
    </Container>
  );
}
