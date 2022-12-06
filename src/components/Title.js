import styled from "styled-components";

export default function Title() {
  return (
    <StyledTitle>
      <p>Selecione o filme</p>
      {/* <p>Selecione o horário</p>
      <p>Selecione o(s) assento(s)</p>
      <p>Pedido feito com sucesso!</p> */}
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  width: auto;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
`;
