import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  div {
    font-size: 12px;
  }
`;

export const ContainerInput = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  text-align: left;
  display: flex;
  align-items: center;
  background-color: white;
  padding-left: 10px;
  border: 1px solid white;

  ${(props) =>
    props.focus &&
    css`
      border-color: #b38c89;
      color: #b38c89;
    `}
  input {
    border: 2px solid white;
    flex: 1;
    height: 30px;
    padding-left: 10px;
  }

  input::placeholder {
    font-size: 10px;
    padding-left: 10px;
  }
`;
