import React, { useState } from "react";

import { ContainerR } from "./styles";

export default function index({ titulo, type, name, value, id }) {

    return (
        <ContainerR>
            <div className="pegaTudo">
                <div><p>{titulo}</p></div>
                <div className="teste"> <input
                    type={type}
                    name={name}
                    value={value}
                    id={id}
                ></input>
                </div>
            </div>
        </ContainerR>
    );
}

