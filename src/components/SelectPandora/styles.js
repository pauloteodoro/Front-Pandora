import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
  div {
    font-size: 12px;
  }
`;

export const ContainerInput = styled.div`
  border: 0.5px solid lightgrey;
  border-radius: 5px;

  ${(props) =>
    props.focus &&
    css`
      border-color: #b38c89;
      color: #b38c89;
    `}
  select {
    border: 2px solid white;
    height: 20px;
    padding-left: 10px;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border-radius: 5px;
  }

  select::placeholder {
    font-size: 14px;
    padding-left: 10px;
  }
`;
