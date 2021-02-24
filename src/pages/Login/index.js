import React from "react";
import { Link } from "react-router-dom";
import InputPandora from "../../components/InputPandora";
import LOGO from "../../assets/LOGO.png";
import { FiMail, FiLock } from "react-icons/fi";

import {
  Container,
  CaixaLogin,
  CaixaTitulos,
  Inf,
  Logo,
  TitulosPequenos,
  ImgLogo,
} from "./styles";

export default function index() {
  return (
    <Container>
      {/* <Inf>
        Devolução grátis em até 25 dias | 40% de desconto em fretes acima de R$
        150,00 | Parcelamento em até 6x no cartão
      </Inf> */}

      <Logo>
        <ImgLogo>
          {" "}
          <img src={LOGO} alt="pandora" />
        </ImgLogo>
      </Logo>

      <CaixaLogin>
        <CaixaTitulos>
          <div>JÁ TEM UMA CONTA PANDORA?</div>
          <span>
            faça seu login agora para acompanhar seus pedido, ter acesso a
            ofertas exclusicas e muito mais.
          </span>
        </CaixaTitulos>

        <InputPandora
          titulo="E-mail"
          placeholder="Digite seu login"
          icon={FiMail}
          sizeValue={12}
          sizeMax={12}
        />

        <InputPandora
          icon={FiLock}
          titulo="Senha"
          type="password"
          placeholder="Digite sua senha"
          sizeValue={12}
          sizeMax={12}
        />

        <a href="forgot">Esqueci minha senha</a>
        <a href="/cadastro">não tem senha? cadastre agora</a>

        <button>ENTRAR</button>

        <TitulosPequenos>
          <div>
            <span>------- É novo por aqui? -------</span>
          </div>
        </TitulosPequenos>

        <Link to="/cadastroCliente/DadosPessoais">
          <button>CRIAR CONTA</button>
        </Link>
      </CaixaLogin>
    </Container>
  );
}
