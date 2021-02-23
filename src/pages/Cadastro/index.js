import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import InputPandora from "../../components/InputPandora";
import SelectPandora from "../../components/SelectPandora";
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
  Grupo01,
} from "./styles";

export default function index() {
  const refFormulario = useRef();
  const history = useHistory();

  const sexo = [
    { id: 1, nome: "Masculino" },
    { id: 2, nome: "Feminino" },
    { id: 3, nome: "Outros" },
  ];

  const tipoDocumento = [
    { id: 2, nome: "RG" },
    { id: 3, nome: "Passaporte" },
    { id: 4, nome: "Nenhum" },
  ];

  const tipoCliente = [
    { id: 1, nome: "Administrador" },
    { id: 2, nome: "Vendedor" },
    { id: 3, nome: "Comprador" },
  ];

  const tipoTelefone = [
    { id: 1, nome: "Celular" },
    { id: 2, nome: "Fixo" },
    { id: 3, nome: "Fax" },
  ];

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
          <div>CRIE SUA CONTA PANDORA</div>
          <span>
            tenha acesso a promoções exclusivas, fique por dentro das novidades
            e acompanhe suas compras.
          </span>
        </CaixaTitulos>

        <Grupo01>
          <InputPandora
            titulo="Nome completo"
            placeholder="digite seu nome completo"
            sizeMax={12}
            sizeValue={8}
          />

          <SelectPandora
            titulo="Sexo"
            sizeMax={12}
            sizeValue={4}
            dados={sexo}
          />
        </Grupo01>

        <Grupo01>
          <InputPandora
            titulo="E-mail"
            placeholder="digite seu e-mail (email@email.dominio)"
            type="email"
            sizeMax={12}
            sizeValue={8}
          />

          <SelectPandora
            titulo="Tipo cliente"
            sizeMax={12}
            sizeValue={4}
            dados={tipoCliente}
          />
        </Grupo01>

        <Grupo01>
          <SelectPandora
            titulo="Tipo Telefone"
            sizeMax={12}
            sizeValue={6}
            dados={tipoTelefone}
          />
          <InputPandora
            titulo="Telefone"
            placeholder="Preencha telefone"
            sizeMax={12}
            sizeValue={6}
          />
        </Grupo01>

        <Grupo01>
          <InputPandora
            titulo="CPF"
            placeholder="999.999.999-99"
            sizeMax={12}
            sizeValue={6}
          />
          <InputPandora
            titulo="Data nascimento"
            type={"date"}
            sizeMax={12}
            sizeValue={6}
          />
        </Grupo01>

        <Grupo01>
          <SelectPandora
            titulo="Tipo documento"
            sizeMax={12}
            sizeValue={6}
            dados={tipoDocumento}
          />
          <InputPandora
            titulo="Documento"
            placeholder="Preencha documento"
            type="email"
            sizeMax={12}
            sizeValue={6}
          />
        </Grupo01>

        {/* <button style={{ height: "15px" }}>Adicionar mais</button> */}

        {/* <InputPandora
          titulo="CPF"
          placeholder="999.999.999-99"
          sizeMax={12}
          sizeValue={12}
        /> */}

        <Grupo01>
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
        </Grupo01>
        <button onClick={handleTelaCadastroP}>CADASTRE-SE</button>
      </CaixaCadastro>
    </Container>
  );
}
