import styled from "styled-components";
import { CINZACLARO, LARANJA,VERDEESCURO } from "../constants/colors";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function FinalScreen({ bookedSeatsInfo }) {
  console.log(bookedSeatsInfo);
  const navigate = useNavigate();
  const { body, sessionInfo } = bookedSeatsInfo;
  // const {seats} = sessionInfo.seats
  console.log(sessionInfo.seats)
  return (
    <>
      <Header />
      <Title3 />
      <StyledFinalScreen>
        <ContainerFilmeSessao data-test="movie-info">
          <h1>Filme e sessão</h1>
          <p>{sessionInfo.movie.title}</p>
          <p>
            {sessionInfo.day.date} {sessionInfo.name}
          </p>
        </ContainerFilmeSessao>
        <ContainerIngressos data-test="seats-info">
          <h1>Ingressos</h1>
          {/* {body.map(seat => <p key={seat}>Assento {}</p>)} */}
          <p>Assento 15</p>
          <p>Assento 16</p>
        </ContainerIngressos>
        <ContainerFilmeSessao data-test="client-info">
          <h1>Comprador</h1>
          <p>Nome: {body.name}</p>
          <p>CPF: {body.cpf}</p>
        </ContainerFilmeSessao>
        <ContainerButton>
          <StyledButon data-test="go-home-btn" onClick={() => navigate("/")}>
            <p>Voltar pra Home </p>
          </StyledButon>
        </ContainerButton>
      </StyledFinalScreen>
    </>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButon = styled.button`
  width: 225px;
  height: 42px;
  background: ${LARANJA};
  border-radius: 3px;
  border: none;
  cursor: pointer;

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

function Title3() {
  return (
    <StyledTitle>
      <p>
        Pedido feito <br />
        com sucesso!
      </p>
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
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: ${VERDEESCURO};
  }
`;
