import React, { useEffect, useRef, useState } from "react";
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
    ListarTelefones,
} from "./styles";

export default function index() {
    const refFormulario = useRef();
    const history = useHistory();

    const [name, setName] = useState();
    const [currentTelephone, setCurrentTelephone] = useState();
    const [telephones, setTelephones] = useState(['ddsdsds']);

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

    function handleTelaCadastro02() {
        if (name) history.push("/CadastroCliente/Documentos");
        else console.log('Preencha o campo de nome');
    }

    function handleChange(e) {
        if (e.target.name == "fullName") setName(e.target.value);
        if (e.target.name == "phone") setCurrentTelephone(e.target.value);
    };

    function addTelephone() {
        console.log(currentTelephone);
        let telephonesArray = telephones;
        telephonesArray.push(currentTelephone);
        setTelephones(telephonesArray);
    }

    function renderTelephones() {
        telephones.forEach(telephone => {
            return (
                <>
                    <div>#1</div>
                    <div>Celular</div>
                    <div>{telephone}</div>
                    <div><div><img src={excluir} alt="excluir" width="15px" height="15px" /></div></div>
                </>
            );
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

                <Grupo01>
                    <InputPandora
                        titulo="Nome completo"
                        placeholder="digite seu nome completo"
                        sizeMax={12}
                        sizeValue={8}
                        name="fullName"
                        onChange={handleChange}
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
                        name="phone"
                        onChange={handleChange}
                    />
                </Grupo01>
                <Grupo01>
                    <div className="AdicionarTelefone">
                        <button onClick={addTelephone}>+</button>
                    </div>
                </Grupo01>
                <span>Lista de Telefones para contato:</span>
                <Grupo01>
                    <ListarTelefones>
                        {renderTelephones()}
                    </ListarTelefones>
                </Grupo01>
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
                <button onClick={handleTelaCadastro02}>PROSSEGUI</button>
            </CaixaCadastro>
        </Container>
    );
}
