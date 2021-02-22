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
border: 0.5px solid lightgrey;

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
  width: 100%;
}
`;
