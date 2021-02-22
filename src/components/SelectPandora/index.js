import React, { useState } from "react";
import FormField from "../FormFieldPandora";

import { Container, ContainerInput } from "./styles";

export default function index({
    titulo,
    option,
    sizeValue,
    sizeMax,
}) {
    const [focus, setFocus] = useState(false);

    return (
        <FormField sizeValue={sizeValue} sizeMax={sizeMax}>
            <Container>
                <div>{titulo}</div>
                <ContainerInput>
                    <select
                        option={option}
                    ></select>
                </ContainerInput>
            </Container>
        </FormField>
    );
}
