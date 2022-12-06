import styled from "styled-components";

export default function SelectSeats() {
  return (
    <StyledSelectedSeats>
      <StyledContainerSeats>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
        <StyledSeatsNumber>
          <p>01</p>
        </StyledSeatsNumber>
      </StyledContainerSeats>
      <ContainerColors>
        <ContatinerOption>
          <StyledSeatsColors></StyledSeatsColors>
          <p>Selecionado</p>
        </ContatinerOption>
        <ContatinerOption>
          <StyledSeatsColors></StyledSeatsColors>
          <p>Disponível</p>
        </ContatinerOption>
        <ContatinerOption>
          <StyledSeatsColors></StyledSeatsColors>
          <p>Indisponível</p>
        </ContatinerOption>
      </ContainerColors>
      <StyledDadosComprador>
        <p>Nome do comprador:</p>
        <input placeholder="Digite seu nome..."></input>
        <p>CPF do comprador:</p>
        <input placeholder="Digite seu CPF..."></input>
      </StyledDadosComprador>
      <StyledButon>
        <p>Reservar assentos(s) </p>
      </StyledButon>
    </StyledSelectedSeats>
  );
}

const StyledSelectedSeats = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
`;

const StyledContainerSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px 7px;
  width: 327px;
`;

const StyledSeatsNumber = styled.div`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  position: relative;

  p {
    width: 13px;
    height: 9px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    position: absolute;
    top: 5px;
    left: 6px;
    letter-spacing: 0.04em;

    color: #000000;
  }
`;

const ContainerColors = styled.div`
  width: 327px;
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
`;
const ContatinerOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;

    color: #4e5a65;
  }
`;
const StyledSeatsColors = styled.div`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  position: relative;

  p {
    width: 13px;
    height: 9px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    position: absolute;
    top: 5px;
    left: 6px;
    letter-spacing: 0.04em;

    color: #000000;
  }
`;
const StyledDadosComprador = styled.div`
  display: flex;
  flex-direction: column;

  margin: 41px 20px;
  margin-bottom: 57px;

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #293845;
  }

  input {
    width: 327px;
    height: 51px;
    margin-bottom: 10px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    ::placeholder {
      color: #afafaf;
      font-family: "Roboto";
      font-style: italic;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      /* margin-left:18px; */
    }
  }
`;

const StyledButon = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border-radius: 3px;
  border: none;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;

    color: #ffffff;
  }
`;
