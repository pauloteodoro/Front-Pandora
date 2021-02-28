import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SelectPandora from "../../../components/SelectPandora";
import InputPandora from "../../../components/InputPandora";
import LOGO from "../../../assets/LOGO.png";
import excluir from "../../../assets/excluir.png";
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
  Titulo,
  ListarEnderecos,
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
   const history = useHistory();
  function handleTelaCadastro04() {
    history.push("/cadastroCliente/Cartao");
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
          <div>CRIE SUA CONTA PANDORA - ETAPA 3 DE 4</div>
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
        <Grupo01>
          <div className="AdicionarEnderecos">
            <button onClick={handleTelaCadastro04}>+</button>
          </div>
        </Grupo01>
        <Grupo01>
          <ListarEnderecos>
            <div>#1</div>
            <div>AV</div>
            <div>Francisco de Goes Araujo</div>
            <div>406</div>
            <div>Guaianazes</div>
            <div>08452490</div>
            <div>São Paulo</div>
            <div>SP</div>
            <div>
              <div>
                <img src={excluir} alt="excluir" width="15px" height="15px" />
                </div>
              </div>
          </ListarEnderecos>
        </Grupo01>
        <div style={{ margin: "10px" }}>
          <input
            type="checkbox"
            value={mesmoEndereco}
            onChange={() => setMesmoEndereco(!mesmoEndereco)}
          ></input>
          <span style={{ marginLeft: "10px" }}>
            {" "}
            Usar os mesmos endereços de cobrança como endereços de entrega
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
            <Grupo01>
              <div className="AdicionarEnderecos">
                <button onClick={handleTelaCadastro04}>+</button>
              </div>
            </Grupo01>
          </EnderecoEntrega>
        ) : (
            ""
          )}
        <button onClick={handleTelaCadastro04}> PROSSEGUIR</button>
      </CaixaCadastro>
    </Container>
  );
}
