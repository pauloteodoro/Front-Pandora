import styled, { css } from "styled-components";

export const ContainerM = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  div {
    font-size: 12px;
    width: 10px;
  }
`;

export const ContainerInputM = styled.div`
  margin-bottom: 5px;
  text-align: left;
  display: flex;
  background-color: white;
  padding-left: 10px;
  border: 0.5px solid lightgrey;
  height: 35px;
  width: 10px;

  ${(props) =>
    props.focus &&
    css`
      border-color: #b38c89;
      color: #b38c89;
    `}
  input {
    border: 2px solid white;
    height:20px;
    padding-left: 10px;
  }

  input::placeholder {
    font-size: 14px;
    padding-left: 10px;
  }
`;