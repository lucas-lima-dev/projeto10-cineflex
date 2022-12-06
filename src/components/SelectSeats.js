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
      <StyledDadosComprador>
        <p>Nome do comprador:</p>
        <input placeholder="Digite seu nome..."></input>
        <p>CPF do comprador:</p>
        <input placeholder="Digite seu CPF..."></input>
      </StyledDadosComprador>
    </StyledSelectedSeats>
  );
}

const StyledSelectedSeats = styled.div`
display: flex;

flex-direction: column;
align-items:center;
margin-left:24px;
margin-right:24px;

`

const StyledContainerSeats = styled.div`
display:flex;
flex-wrap:wrap;
gap: 18px 7px;
width:327px;


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
    position:absolute;
    top: 5px;
    left: 6px;
    letter-spacing: 0.04em;

    color: #000000;
  }
`;

const StyledDadosComprador = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 0px 20px;

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
