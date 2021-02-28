import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SelectPandora from "../../../components/SelectPandora";
import InputPandora from "../../../components/InputPandora";
import LOGO from "../../../assets/LOGO.png";
import excluir from "../../../assets/excluir.png";
import {
    Container,
    CaixaCadastro,
    CaixaTitulos,
    CartaoCredio,
    Inf,
    Logo,
    ImgLogo,
    Grupo01,
    ListarEnderecos,
} from "./styles";

export default function index() {
    const refFormulario = useRef();

    const bandeirasCartao = [
        { id: 1, nome: "Visa" },
        { id: 2, nome: "Master card" },
        { id: 3, nome: "Elo" },
    ];

    function handleTelaCadastro04() {
        history.push("/CadastroCliente/Cartao");
    }
    return (
        <Container>
            <Inf>
                Devolução grátis em até 25 dias | 40% de desconto em fretes acima de R$
                150,00 | Parcelamento em até 6x no cartão
            </Inf>
            <Logo>
                <ImgLogo>
                    <img src={LOGO} alt="pandora" />
                </ImgLogo>
            </Logo>
            <CaixaCadastro>
                <CaixaTitulos>
                    <div>CRIE SUA CONTA PANDORA - ETAPA 4 DE 4</div>
                    <span>
                        Tenha acesso a promoções exclusivas, fique por dentro das novidades
                        e acompanhe suas compras.
                    </span>
                </CaixaTitulos>
                <CartaoCredio> 
                        <InputPandora
                            titulo="Nome impresso no cartão"
                            placeholder="digite o nome"
                            sizeMax={12}
                            sizeValue={12}
                        />
                     <Grupo01>
                        <InputPandora
                        titulo="Número do cartão"
                        placeholder="número cartão"
                        sizeMax={12}
                        sizeValue={6}
                        />
                        <SelectPandora
                        titulo="Bandeira"
                        dados={bandeirasCartao}
                        sizeMax={12}
                        sizeValue={3}
                        />

                        <InputPandora
                        titulo="Código de Segurança"
                        placeholder=" "
                        sizeMax={12}
                        sizeValue={3}
                        />
                    </Grupo01>
                    <Grupo01>
                        <div className="AdicionarEnderecos">
                            <button onClick={handleTelaCadastro04}>+</button>
                        </div>
                    </Grupo01>
                    <Grupo01>
          <ListarEnderecos>
            <div>#1</div>
            <div>THAIS FERREIRA DE SOUZA</div>
            <div>1234567890</div>
            <div>VISA</div>
            <div>0123</div>
            <div>
                <div>
                    <img src={excluir} alt="excluir" width="15px" height="15px" />
                </div>
            </div>
          </ListarEnderecos>
        </Grupo01>
                </CartaoCredio>
                <button onClick={handleTelaCadastro04}> PROSSEGUIR</button>
            </CaixaCadastro>
        </Container>
    );
}
