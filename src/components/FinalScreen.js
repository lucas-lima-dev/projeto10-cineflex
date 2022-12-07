import styled from "styled-components";
import { CINZACLARO, LARANJA } from "../constants/colors";

export default function FinalScreen() {
  return (
    <StyledFinalScreen>
      <ContainerFilmeSessao>
        <h1>Filme e sessão</h1>
        <p>Enola Holmes</p>
        <p>24/06/2021 15:00</p>
      </ContainerFilmeSessao>
      <ContainerIngressos>
        <h1>Ingressos</h1>
        <p>Assento 15</p>
        <p>Assento 16</p>
      </ContainerIngressos>
      <ContainerFilmeSessao>
        <h1>Comprador</h1>
        <p>Nome: João da Silva Sauro</p>
        <p>CPF: 123.456.789-10</p>
      </ContainerFilmeSessao>
      <ContainerButton>

      <StyledButon>
        <p>Voltar pra Home </p>
      </StyledButon>
      </ContainerButton>
    </StyledFinalScreen>
  );
}

const StyledFinalScreen = styled.div`
  margin: 23px;
`;
const ContainerFilmeSessao = styled.div`
  margin-bottom: 30px;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 10px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;

const ContainerIngressos = styled.div`
  margin-bottom: 40px;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 10px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;

const ContainerComprador = styled.div`
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 10px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
  }
`;
const ContainerButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const StyledButon = styled.button`
  width: 225px;
  height: 42px;
  background: ${LARANJA};
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