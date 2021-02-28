import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import InputPandora from "../../../components/InputPandora";
import SelectPandora from "../../../components/SelectPandora";
import LOGO from "../../../assets/LOGO.png";
import excluir from "../../../assets/excluir.png";
import {
    Container,
    CaixaCadastro,
    CaixaTitulos,
    Inf,
    Logo,
    ImgLogo,
    Grupo01,
    ListarDocumentos,
} from "./styles";

export default function index() {
    const refFormulario = useRef();
    const history = useHistory();
    const tipoDocumento = [
        { id: 2, nome: "RG" },
        { id: 3, nome: "Passaporte" },
        { id: 4, nome: "Certidão de nascimento" },
        { id: 5, nome: "CNH" },
        { id: 6, nome: "Nenhum" },
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

    function handleTelaCadastro03() {
        history.push("/CadastroCliente/Enderecos");
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
                    <div>CRIE SUA CONTA PANDORA - ETAPA 2 DE 4 </div>
                    <span>
                        tenha acesso a promoções exclusivas, fique por dentro das novidades
                        e acompanhe suas compras.
          </span>
                </CaixaTitulos>

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
                    <div className="AdicionarDocumento">
                        <button onClick={handleTelaCadastro03}>+</button>
                    </div>
                </Grupo01>
                <span>Lista de documentos para cadastro: </span>
                <Grupo01>
                    <ListarDocumentos>
                        <div>#1</div>
                        <div>RG</div>
                        <div>38.467.456-9</div>
                        <div><div><img src={excluir} alt="excluir" width="15px" height="15px" /></div></div>
                    </ListarDocumentos>
                </Grupo01>
                <button onClick={handleTelaCadastro03}> PROSSEGUIR</button>
            </CaixaCadastro>
        </Container>
    );
}
