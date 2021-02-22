import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
`;

export const Inf = styled.div`
  background: #fedfdd;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 25px;
  font-size: 12px;
  display: flex;
  border-bottom: 0.2px solid black;
`;

export const Logo = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.2px solid black;
`;
export const ImgLogo = styled.div``;

export const MensagemInicial = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 20px;
    text-align: center;
`;

export const CaixaCadastro = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  align-items: center;
  border-radius: 5px;
  border: 0.5px solid lightgrey;
  margin-top: 30px;
  height: 1350px;
  padding-left: 50px;
  padding-right: 50px;
  transition: background-color 0.2s;
  @media (max-width: 100%) {
    width: 90%;
  }

  button {
    width: 150px;
    height: 50px;
    background: #b38c89;
    color: white;
    border-radius: 50px;
    border: none;
    margin-top: 0px;
    &:hover {
      background: ${shade(0.2, "#b38c89")};
    }
  }
  a {
    color: gray;
    text-decoration: none;
    font-size: 12px;
    margin: 5px;

    &:hover {
      color: ${shade(0.2, "#D66660")};
    }
  }
`;

export const CaixaTitulos = styled.div`
  line-height: 0.8;
  text-align: center;
  div {
    text-align: center;
    color: #d66660;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 18px;
  }

  span {
    font-size: 15px;
    margin-top: 30px;
    line-height: 1.5;
  }
`;

export const EnderecoCobranca = styled.div`
    width: 100%;    
    border: 0.2px solid lightgrey;
    margin-top: 50px;
`;
export const Grupo01 = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;    
    justify-content: space-between;
`;

export const EnderecoEntrega = styled.div`
    width: 100%;    
    border: 0.2px solid lightgrey;
    margin-top: 50px;
  
`;
export const CartaoCredio = styled.div`
    width: 100%;    
    border: 0.2px solid lightgrey;
    margin-top: 50px;
  
`;

export const Titulo = styled.div`
    width: 33%;    
    font-size: 15px;
    color: #d66660;
    position: relative;
    top: -10px;
    left: 10px;
    background-color:#ffffff;
  
`;
export const ContainerPT2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  div {
    align-items: center;
    width: 100%;
    display: flex;
  }
  span {
    flex-wrap: wrap;
  }
`;

export const ContainerPT3 = styled.div`
  div {
    width: 100%;
    display: flex;
  }
  span {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const RadioButtonDiv = styled.div`
  div {
    display: flex;
    flex-direction: column;
  }
`;
