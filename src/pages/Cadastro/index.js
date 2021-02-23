import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import InputPandora from "../../components/InputPandora";
import InputPandoraMedio from "../../components/InputPandoraMedio";
import RadioButton from "../../components/RadioButton";
import LOGO from "../../assets/LOGO.png";
import {
  Container,
  CaixaCadastro,
  CaixaTitulos,
  Inf,
  Logo,
  ImgLogo,
  ContainerPT2,
  ContainerPT3,
  RadioButtonDiv,
} from "./styles";

export default function index() {
  const refFormulario = useRef();
  const history = useHistory();

  // function cadastrar() {
  //   var formData = new FormData(refFormulario.current);
  //   api
  //     .post("url/endpoint", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => { });
  // }

  function handleTelaCadastroP() {
    history.push("/CadastroP2");
  }

  return (
    <Container>
      {/* <Inf>
        Devolução grátis em até 25 dias | 40% de desconto em fretes acima de R$
        150,00 | Parcelamento em até 6x no cartão
      </Inf> */}

      <Logo>
        <ImgLogo>
          <img src={LOGO} alt="pandora" />
        </ImgLogo>
      </Logo>

      <CaixaCadastro>
        <CaixaTitulos>
          <div>CRIE SUA CONTA PANDORA</div>
          <span>
            tenha acesso a promoções exclusivas, fique por dentro das novidades
            e acompanhe suas compras.
          </span>
        </CaixaTitulos>

        <InputPandora
          titulo="Nome completo"
          placeholder="digite seu nome completo"
          sizeMax={12}
          sizeValue={12}
        />

        <InputPandora
          titulo="E-mail"
          placeholder="digite seu e-mail (email@email.dominio)"
          type="email"
          sizeMax={12}
          sizeValue={12}
        />

        {/* <InputPandora
          titulo="CPF"
          placeholder="999.999.999-99"
          sizeMax={12}
          sizeValue={12}
        /> */}

        <div style={{ display: "flex", width: "100vh" }}>
          <InputPandora
            titulo="CPF"
            placeholder="999.999.999-99"
            sizeMax={12}
            sizeValue={6}
          />
          <InputPandora
            titulo="dataNascimento"
            type={"date"}
            sizeMax={12}
            sizeValue={6}
          />
        </div>

        {/* <ContainerPT2>
          <div>
            <InputPandoraMedio
              titulo="Telefone celular"
              placeholder="(xx) xxxxx-xxxx"
              type="tel"
            />

          </div>
        </ContainerPT2>
 */}
        {/* <ContainerPT3>
          <div>
            <InputPandoraMedio titulo="Senha" placeholder="Digite sua senha" />
            <InputPandoraMedio
              titulo="Confirmar senha"
              placeholder="Confirme a senha"
            />
          </div>
        </ContainerPT3> */}

        <div style={{ display: "flex", width: "100vh" }}>
          <InputPandora
            titulo="Senha"
            sizeMax={12}
            sizeValue={6}
            type="password"
            name="senha"
          />
          <InputPandora
            titulo="Confirmação de senha"
            type={"password"}
            sizeMax={12}
            sizeValue={6}
            name="confirmacaoSenha"
          />
        </div>

        <button onClick={handleTelaCadastroP}>CADASTRE-SE</button>
      </CaixaCadastro>
    </Container>
  );
}
