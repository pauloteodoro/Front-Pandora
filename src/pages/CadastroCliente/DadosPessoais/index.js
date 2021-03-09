import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputPandora from "../../../components/InputPandora";
import SelectPandora from "../../../components/SelectPandora";
import LOGO from "../../../assets/LOGO.png";
import excluir from "../../../assets/excluir.png";

import api from "../../../services";

import {
  Container,
  CaixaCadastro,
  CaixaTitulos,
  Inf,
  Logo,
  ImgLogo,
  Grupo01,
  ListarTelefones,
} from "./styles";

export default function index() {
  const refFormulario = useRef();
  const [listaValidacoes, setListaValidacoes] = useState(null);

  const history = useHistory();

  const [telephones, setTelephones] = useState([]);

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

  function listaTelefones() {}

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

  function handleTelaCadastroP() {
    history.push("/cadastroCliente/Documentos");
  }

  function cadastrar() {
    var formData = new FormData(refFormulario.current);
    api
      .post("api/Pessoas", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.cadastradoOk) {
          setListaValidacoes(null);
          handleTelaCadastroP();
        } else {
          setListaValidacoes(response.data.listaErros);
        }
      });
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
      {/*} <span className="TituloBemVindo">Bem-vinda(o) ao cadastro PANDORA!</span>
            <span>Para melhorar sua experiência em nosso site dividimos o cadastro em 4 etapas, junte-se a nós!</span>*/}

      <CaixaCadastro>
        <CaixaTitulos>
          <div>CRIE SUA CONTA PANDORA - ETAPA 1 DE 4</div>
          <span>
            tenha acesso a promoções exclusivas, fique por dentro das novidades
            e acompanhe suas compras.
          </span>
        </CaixaTitulos>

        {listaValidacoes
          ? listaValidacoes.map((itens) => {
              return <div>{itens}</div>;
            })
          : ""}

        <form style={{ width: "100%" }} ref={refFormulario}>
          <Grupo01>
            <InputPandora
              titulo="Nome completo"
              placeholder="digite seu nome completo"
              sizeMax={12}
              sizeValue={8}
              name="nome"
            />

            <SelectPandora
              titulo="Sexo"
              sizeMax={12}
              sizeValue={4}
              dados={sexo}
              name="sexoClienteID"
            />
          </Grupo01>

          <Grupo01>
            <InputPandora
              titulo="E-mail"
              placeholder="digite seu e-mail"
              type="email"
              sizeMax={12}
              sizeValue={8}
              name="email"
            />

            <SelectPandora
              titulo="Tipo cliente"
              sizeMax={12}
              sizeValue={4}
              dados={tipoCliente}
              name="tipoClienteID"
            />
          </Grupo01>

          <Grupo01>
            <SelectPandora
              titulo="Tipo Telefone"
              sizeMax={12}
              sizeValue={6}
              dados={tipoTelefone}
              name="tipoTelefoneID"
            />
            <InputPandora
              titulo="Telefone"
              placeholder="Preencha telefone"
              sizeMax={12}
              sizeValue={6}
              name="numeroTelefone"
            />
          </Grupo01>

          <Grupo01>
            <SelectPandora
              titulo="Tipo Telefone"
              sizeMax={12}
              sizeValue={6}
              dados={tipoTelefone}
              name="tipoTelefoneID"
            />
            <InputPandora
              titulo="Telefone"
              placeholder="Preencha telefone"
              sizeMax={12}
              sizeValue={6}
              name="numeroTelefone"
            />
          </Grupo01>

          <span>Lista de Telefones para contato:</span>

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
        </form>
        <button onClick={cadastrar}>PROSSEGUI</button>
      </CaixaCadastro>
    </Container>
  );
}
