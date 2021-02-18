import React from "react";

import { Link } from "react-router-dom";

import InputPandora from "../../components/InputPandora";
import Pandora from "../../assets/Pandora.png";

import { FiMail, FiLock } from "react-icons/fi";

import { Container, CaixaLogin, CaixaTitulos, Inf, Logo } from "./styles";

export default function index() {
  return (
    <Container>
      {/* <Inf>
        Devolução grátis em até 25 dias | 40% de desconto em fretes acima de R$
        150,00 | Parcelamento em até 6x no cartão
      </Inf> */}

      <Logo>
        <img src={Pandora} alt="pandora" />
      </Logo>

      <CaixaLogin>
        <CaixaTitulos>
          <div>JÁ TEM UMA CONTA PANDORA ?</div>
          <span>
            Faça seu login agora para acompanhar seus pedido, ter acesso a
            ofertas exclusicas e muito mais.
          </span>
        </CaixaTitulos>
        <InputPandora
          titulo="E-mail"
          placeholder="Digite seu login"
          icon={FiMail}
        />

        <InputPandora
          icon={FiLock}
          titulo="Senha"
          placeholder="Digite sua senha"
        />

        <a href="forgot">Esqueci minha senha</a>

        <button>ENTRAR</button>

        <Link to="/cadastro">
          <button>CRIAR CONTA</button>
        </Link>
      </CaixaLogin>
    </Container>
  );
}
