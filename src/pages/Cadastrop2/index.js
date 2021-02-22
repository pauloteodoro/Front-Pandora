import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SelectPandora from "../../components/SelectPandora";
import InputPandora from "../../components/InputPandora";
import LOGO from "../../assets/LOGO.png";
import api from "../../services";
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
    Titulo
} from "./styles";

export default function index() {
    const refFormulario = useRef();

    function cadastrar() {
        var formData = new FormData(refFormulario.current);
        api
            .post("url/endpoint", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => { });
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
            <MensagemInicial>
                Calma! Seu cadastro Pandora está quase no fim, só precisamos de mais algumas informações para concluir.
            </MensagemInicial>
            <CaixaCadastro>
                <CaixaTitulos>
                    <div>FINALIZE SUA CONTA PANDORA</div>
                    <span>
                        tenha acesso a promoções exclusivas, fique por dentro das novidades
                        e acompanhe suas compras.
                    </span>
                </CaixaTitulos>
                <EnderecoCobranca>
                    <Titulo>Dados Endereço de cobranças</Titulo>
                    <Grupo01>
                        <SelectPandora
                            titulo="Tipo de Residencia"
                            option="Sei la"
                            sizeMax={12}
                            sizeValue={3}
                        />

                        <InputPandora
                            titulo="Logradouro"
                            placeholder="logradouro"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="Tipo de logradouro"
                            placeholder="digite o tipo"
                            sizeMax={12}
                            sizeValue={3}
                        />
                    </Grupo01>
                    <Grupo01>
                        <InputPandora
                            titulo="Numero residencial"
                            placeholder="digite o numero"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="Bairro"
                            placeholder="digite o bairro"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="CEP"
                            placeholder="digite o CEP"
                            sizeMax={12}
                            sizeValue={3}
                        />
                    </Grupo01>
                    <Grupo01>
                        <InputPandora
                            titulo="Cidade"
                            placeholder="digite a cidade"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="Estado"
                            placeholder="digite o estado"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="País"
                            placeholder="digite o país"
                            sizeMax={12}
                            sizeValue={3}
                        />
                    </Grupo01>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </EnderecoCobranca>
                <EnderecoEntrega>
                    <Titulo>Dados Endereço de Entrega</Titulo>
                    <Grupo01>
                        <SelectPandora
                            titulo="Tipo de Residencia"
                            option="Sei la"
                            sizeMax={12}
                            sizeValue={3}
                        />

                        <InputPandora
                            titulo="Logradouro"
                            placeholder="logradouro"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="Tipo de logradouro"
                            placeholder="digite o tipo"
                            sizeMax={12}
                            sizeValue={3}
                        />

                    </Grupo01>
                    <Grupo01>
                        <InputPandora
                            titulo="Numero residencial"
                            placeholder="digite o numero"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="Bairro"
                            placeholder="digite o bairro"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="CEP"
                            placeholder="digite o CEP"
                            sizeMax={12}
                            sizeValue={3}
                        />
                    </Grupo01>
                    <Grupo01>
                        <InputPandora
                            titulo="Cidade"
                            placeholder="digite a cidade"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="Estado"
                            placeholder="digite o estado"
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="País"
                            placeholder="digite o país"
                            sizeMax={12}
                            sizeValue={3}
                        />
                    </Grupo01>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </EnderecoEntrega>
                <CartaoCredio>
                    <Titulo>Dados do seu cartão de crédito</Titulo>
                    <Grupo01>
                        <SelectPandora
                            titulo="Bandeira"
                            option="Sei la"
                            sizeMax={12}
                            sizeValue={3}
                        />

                        <InputPandora
                            titulo="Código de Segurança"
                            placeholder=" "
                            sizeMax={12}
                            sizeValue={3}
                        />
                        <InputPandora
                            titulo="Número do cartão"
                            placeholder="número cartão"
                            sizeMax={12}
                            sizeValue={3}
                        />
                    </Grupo01>
                    <Grupo01>
                        <InputPandora
                            titulo="Nome impresso no cartão"
                            placeholder="digite o nome"
                            sizeMax={12}
                            sizeValue={11}
                        />
                    </Grupo01>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </CartaoCredio>

                <Link to="/Cadastrop2">
                    <br></br>
                    <br></br>
                    <button>FINALIZAR CADASTRO</button>
                </Link>
            </CaixaCadastro>
        </Container>
    );
}
