import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SelectPandora from "../../components/SelectPandora";
import InputPandora from "../../components/InputPandora";
import LOGO from "../../assets/LOGO.png";
import {
  Container,
  CaixaCadastro,
  CaixaTitulos,
  Inf,
  Logo,
  ImgLogo,
  MensagemInicial,
  EnderecoCobranca,
  Grupo01,
  EnderecoEntrega,
  CartaoCredio,
  Titulo,
} from "./styles";

export default function index() {
  const refFormulario = useRef();

  const tipoEndereco = [
    { id: 1, nome: "Casa" },
    { id: 2, nome: "Apartamento" },
  ];

  const tiposLogradouros = [
    { id: 1, nome: "Rua" },
    { id: 2, nome: "Avenida" },
    { id: 3, nome: "jardim" },
    { id: 4, nome: "Estrada" },
    { id: 5, nome: "Quadra" },
    { id: 6, nome: "chácara" },
  ];

  const bandeirasCartao = [
    { id: 1, nome: "Visa" },
    { id: 2, nome: "Master card" },
    { id: 3, nome: "Elo" },
  ];

  const [mesmoEndereco, setMesmoEndereco] = useState(false);

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
      <MensagemInicial>
        Calma! Seu cadastro Pandora está quase no fim, só precisamos de mais
        algumas informações para concluir.
      </MensagemInicial>
      <CaixaCadastro>
        <CaixaTitulos>
          <div>FINALIZE SUA CONTA PANDORA</div>
          <span>
            Tenha acesso a promoções exclusivas, fique por dentro das novidades
            e acompanhe suas compras.
          </span>
        </CaixaTitulos>
        <EnderecoCobranca>
          <Titulo>Dados Endereço de cobranças</Titulo>
          <Grupo01>
            <SelectPandora
              titulo="Tipo de Residencia"
              sizeMax={12}
              sizeValue={4}
              dados={tipoEndereco}
              name="tipoResidencia"
            />

            <SelectPandora
              titulo="Tipo de logradouro"
              sizeMax={12}
              sizeValue={3}
              dados={tiposLogradouros}
              name="tipoLogradouro"
            />
            <InputPandora
              titulo="Logradouro"
              placeholder="logradouro"
              sizeMax={12}
              sizeValue={6}
              name="logradouro"
            />
          </Grupo01>
          <Grupo01>
            <InputPandora
              titulo="Numero residencial"
              placeholder="digite o numero"
              sizeMax={12}
              sizeValue={3}
              name="numeroEndereco"
            />
            <InputPandora
              titulo="Bairro"
              placeholder="digite o bairro"
              sizeMax={12}
              sizeValue={6}
              name="bairroEndereco"
            />
            <InputPandora
              titulo="CEP"
              placeholder="digite o CEP"
              sizeMax={12}
              sizeValue={3}
              name="cepEndereco"
            />
          </Grupo01>
          <Grupo01>
            <InputPandora
              titulo="Cidade"
              placeholder="digite a cidade"
              sizeMax={12}
              sizeValue={6}
              name="cidadeEndereco"
            />
            <InputPandora
              titulo="Estado"
              placeholder="digite o estado"
              sizeMax={12}
              sizeValue={6}
              name="estadoEndereco"
            />
          </Grupo01>
        </EnderecoCobranca>

        <div style={{ margin: "10px" }}>
          <input
            type="checkbox"
            value={mesmoEndereco}
            onChange={() => setMesmoEndereco(!mesmoEndereco)}
          ></input>
          <span>
            {" "}
            Usar mesmo endereço de combrança como endereço de entrega
          </span>
        </div>

        {!mesmoEndereco ? (
          <EnderecoEntrega>
            <Titulo>Dados Endereço de Entrega</Titulo>

            <Grupo01>
              <SelectPandora
                titulo="Tipo de Residencia"
                sizeMax={12}
                sizeValue={4}
                dados={tipoEndereco}
                name="tipoResidencia"
              />

              <SelectPandora
                titulo="Tipo de logradouro"
                sizeMax={12}
                sizeValue={3}
                dados={tiposLogradouros}
                name="tipoLogradouro"
              />
              <InputPandora
                titulo="Logradouro"
                placeholder="logradouro"
                sizeMax={12}
                sizeValue={6}
                name="logradouro"
              />
            </Grupo01>
            <Grupo01>
              <InputPandora
                titulo="Numero residencial"
                placeholder="digite o numero"
                sizeMax={12}
                sizeValue={3}
                name="numeroEndereco"
              />
              <InputPandora
                titulo="Bairro"
                placeholder="digite o bairro"
                sizeMax={12}
                sizeValue={6}
                name="bairroEndereco"
              />
              <InputPandora
                titulo="CEP"
                placeholder="digite o CEP"
                sizeMax={12}
                sizeValue={3}
                name="cepEndereco"
              />
            </Grupo01>
            <Grupo01>
              <InputPandora
                titulo="Cidade"
                placeholder="digite a cidade"
                sizeMax={12}
                sizeValue={6}
                name="cidadeEndereco"
              />
              <InputPandora
                titulo="Estado"
                placeholder="digite o estado"
                sizeMax={12}
                sizeValue={6}
                name="estadoEndereco"
              />
            </Grupo01>
          </EnderecoEntrega>
        ) : (
          ""
        )}

        <CartaoCredio>
          <Titulo>Dados do seu cartão de crédito</Titulo>
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
          <Grupo01></Grupo01>
        </CartaoCredio>

        <Link to="/">
          <button>FINALIZAR CADASTRO</button>
        </Link>
      </CaixaCadastro>
    </Container>
  );
}
