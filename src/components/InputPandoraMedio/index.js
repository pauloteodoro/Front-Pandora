import React, { useState } from "react";

import { ContainerM, ContainerInputM } from "./styles";

export default function index({ titulo, placeholder, type, icon: Icon }) {
    const [focus, setFocus] = useState(false);

    return (
        <ContainerM>
            <div>{titulo}</div>
            <ContainerInputM focus={focus}>
                {Icon && <Icon />}
                <input
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    type={type}
                    placeholder={placeholder}
                ></input>
            </ContainerInputM>
        </ContainerM>
    );
}
