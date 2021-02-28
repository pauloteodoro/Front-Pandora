import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  }
`;

export const Inf = styled.div`
  background: #fedfdd;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 25px;
  font-size: 12px;
  display: flex;
  border-bottom: 0.2px solid gray;
`;

export const Logo = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgLogo = styled.div`
  position: relative; 
  margin-top: 10px;
  left: 70px;
`;

export const Icones = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 350px;
  top: 10px;
`;
export const Busca = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  border-bottom: 0.2px solid gray;

  div{
    margin-left: 65px;
    margin-top: 0px;
  }

  div.menu{
    width: 50%;
    position: relative;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10px;
    div{
      margin-top: 20px;
      font-size: 18px;
      font-weight: lighter;
    }
  }
`;
export const Corpo = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  div.subMenu{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 90vh;
    width: 25%;
    margin-left: 20px;
    margin-top: 40px;
    div.bloco{

      a{
        text-decoration: none;
      }
      a:link {
        color: black;
     }
     a:visited {
         color: black;
     }
     a:hover {
         color: #D66660;
     }
     a:active {
         color: #D66660;
     }
      span{
        color: #D66660;
      }
      margin-top: 20px;
      img{
        margin-top: 5px;
        margin-left: 5px;
        margin-bottom: 20px;
      }
      img.seta{
        margin-top: 20px;
        margin-left: 10%;
        margin-bottom: 20px;
      }
      border-bottom: 0.2px solid #C4C4C4;
      display flex;

      div.textos{
        width: 100%;
        margin-top: 10px;
        margin-left: 15px;
        div.teste{
          margin-top:5px;
          margin-bottom:5px;
          color: #C4C4C4;
          font-size: 12px;
        }
      }
      div.imagemSeta{
        position: relative; 
        left: 0%;
      }
    }
  }
  
  div.TituloInicical{
   
    margin-top: 70px;
    margin-left: 150px;
    width: 50%;
    height: 15%;
    div.Ola{
      font-size: 18px;
    }

    div.TextoDescricao{
      display: flex;
      flex-direction: row;
      font-size: 15px;

      }
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

export const Rodape = styled.div`
  background: #fedfdd; 
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border-top: 0.2px solid gray;
  padding-bottom: 20px;
  div.RedesSociais{
    margin-top: 10px;
    width: 30%;
    text-align: center;

    div{
      margin-left: 85px;
      margin-top: 20px;
      width: 50%;
      display: flex;
      justify-content: space-between;
      position: relative;
    }
  }
  
  div.receberEmail{
    margin-top: 10px;
    width: 30%;
    text-align: center;

    div.pegar{
      display:flex;
      justify-content: center;
     
      div.EscrevaEmail{
        padding-top: 10px;
        Input{
          background: #fedfdd; 
          border: none;
          border-bottom: 1px solid gray;
        }
      }

      div.bntEnviar{
        flex-flow: row nowrap;
        Input{
          background: gray;
          border: none;
          color: #ffffff;

        }
      }
    }
  }
  div.descricao{
    margin-top: 10px;
    width: 30%;
    text-align: justify;
    margin-right: 20px;
  }
  }
`;
export const Verificacao = styled.div`
  width: 100%;
  background: #fedfdd; 
  font-size: 10px;
  text-align: center;
  border-top: 0.2px solid gray;
  padding-top: 20px;
  padding-bottom: 20px;
  }
`;



