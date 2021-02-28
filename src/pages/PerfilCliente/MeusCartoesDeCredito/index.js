import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import LOGO from "../../../assets/LOGO.png";
import Favoritos from "../../../assets/formato-de-coracao.png";
import Favoritoss from "../../../assets/formato-de-coracao2.png";
import Sacola from "../../../assets/cesta-de-compras.png";
import Usuario from "../../../assets/usuario-de-midia-social.png";
import Usuario2 from "../../../assets/usuario-de-midia-social (1).png";
import excluir from "../../../assets/excluir.png";
import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import Pinterest from "../../../assets/pinterest.png";
import Twitter from "../../../assets/twitter.png";
import Whatsapp from "../../../assets/whatsapp.png";
import Pedidos from "../../../assets/caixa-aberta.png";
import CartaoCredito from "../../../assets/cartao-de-credito.png";
import Endereco from "../../../assets/casa-com-janela.png";
import Seta from "../../../assets/proximo.png";
import Senha from "../../../assets/cadeado-aberto.png";
import InputPandora from "../../../components/InputPandora";
import { FiSearch } from "react-icons/fi";
import {
    Container,
    Inf,
    Logo,
    ImgLogo,
    Icones,
    Busca,
    Corpo,
    Rodape,
    Verificacao
} from "./styles";

export default function index() {
    function handleTelaCadastro03() {
        history.push("/CadastroCliente/Enderecos");
    }

    return (
        <>
            <Container>
                <Inf>
                    Devolução grátis em até 25 dias | 40% de desconto em fretes acima de R$
                    150,00 | Parcelamento em até 6x no cartão
            </Inf>
                <Logo>
                    <ImgLogo>
                        <img src={LOGO} alt="pandora" />
                    </ImgLogo>
                    <Icones>
                        <img src={Favoritos} alt="favoritos" />
                        <img src={Sacola} alt="sacola" />
                        <img src={Usuario} alt="login" />
                    </Icones>
                </Logo>
                <Busca>
                    <div className="menu">
                        <div>ROUPAS </div>
                        <div>SAPATOS </div>
                        <div>ACESSÓRIOS </div>
                        <div>BELEZA & SAÚDE</div>
                    </div>
                    <div>
                        <InputPandora
                            placeholder="Pesquisar"
                            icon={FiSearch}
                            sizeValue={12}
                            sizeMax={1}
                        />
                    </div>
                </Busca>
            </Container>
            <Corpo>
                <div className="subMenu">
                    <div className="bloco">
                        <img src={Pedidos} alt="pedidos" width="50px" height="50px" />
                        <div className="textos">
                            <div>
                                MEUS PEDIDOS
                            </div>
                            <div>
                                <div className="teste">
                                    consulte seus pedidos e devoluções
                                </div>
                            </div>
                        </div>
                        <img className="seta" src={Seta} alt="pedidos" width="20px" height="20px" />
                    </div>

                    <div className="bloco">
                        <img src={Favoritoss} alt="pedidos" width="50px" height="50px" />
                        <div className="textos">
                            <div>
                                MEUS DESEJOS
                             </div>
                            <div>
                                <div className="teste">
                                    os produtos que você mais quer
                                </div>
                            </div>
                        </div>
                        <img className="seta" src={Seta} alt="pedidos" width="20px" height="20px" />
                    </div>

                    <div className="bloco">
                        <img src={CartaoCredito} alt="pedidos" width="50px" height="50px" />
                        <div className="textos">
                            <div>
                                <span> MEUS CARTÕES DE CRÉDITO </span>
                            </div>
                            <div>
                                <div className="teste">
                                    consulte e remova seus cartões
                                </div>
                            </div>
                        </div>
                        <div className="imagemSeta">
                            <img className="seta" src={Seta} alt="pedidos" width="20px" height="20px" />
                        </div>
                    </div>

                    <div className="bloco">
                        <img src={Endereco} alt="pedidos" width="50px" height="50px" />
                        <div className="textos">
                            <div>
                                <Link to="/PerfilCliente/MeusEnderecos">MEUS ENDEREÇOS </Link>
                            </div>
                            <div>
                                <div className="teste">
                                    veja seus endereços
                                </div>
                            </div>
                        </div>
                        <img className="seta" src={Seta} alt="pedidos" width="20px" height="20px" />
                    </div>

                    <div className="bloco">
                        <img src={Usuario2} alt="pedidos" width="50px" height="50px" />
                        <div className="textos">
                            <div>
                                <Link to="/PerfilCliente/MeusDados">MEUS DADOS</Link>
                            </div>
                            <div>
                                <div className="teste">
                                    veja e edite suas informações
                                </div>
                            </div>
                        </div>
                        <img className="seta" src={Seta} alt="pedidos" width="20px" height="20px" />
                    </div>

                    <div className="bloco">
                        <img src={Senha} alt="pedidos" width="50px" height="50px" />
                        <div className="textos">
                            <div>
                                ALTERAR SENHA
                            </div>
                            <div>
                                <div className="teste">
                                    veja e edite suas informações
                                </div>
                            </div>
                        </div>
                        <img className="seta" src={Seta} alt="pedidos" width="20px" height="20px" />
                    </div>
                </div>
            </Corpo>
            <Rodape>
                <div className="RedesSociais">
                    Entre em contato por meio de nossas redes sociais!
                    <div>
                        <img src={Facebook} alt="facebook" />
                        <img src={Instagram} alt="instagram" />
                        <img src={Pinterest} alt="pinterest" />
                        <img src={Twitter} alt="twitter" />
                        <img src={Whatsapp} alt="whatsapp" />
                    </div>
                </div>
                <div className="receberEmail">
                    Receba nossas promoções por email
                    <div className="pegar">
                        <form>
                            <div className="EscrevaEmail">
                                <input type="email" name="name" placeholder="Cadastre seu email aqui" />
                            </div>
                            <div className="bntEnviar">
                                <input type="submit" value=" Enviar " />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="descricao">
                    Fundada em 2021 - Pandora tem a missão de levar as mulheres brasileiras moda, bem estar e saúde! Facilitando a vida da mulher com seus beneficios arrasadores!
                </div>
            </Rodape>
            <Verificacao>
                © 2012 PANDORA - TODOS OS DIREITOS RESERVADOS
            </Verificacao>
        </>
    );
}
