import styled from "styled-components";
import { CINZACLARO, LARANJA } from "../constants/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import filmeEnolaHolmes from "../assets/enolaholmes.png";
import Header from "./Header";


export default function SelectSeats() {
  const seats = ({
    "id": 1,
    "name": "15:00",
    "day": {
			"id": 24062021,
      "weekday": "Quinta-feira",
      "date": "24/06/2021",
		},
    "movie": {
        "id": 1,
        "title": "2067",
        "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        "releaseDate": "2020-10-01T00:00:00.000Z",
    },
    "seats": [
				{
            "id": 1,
            "name": "1",
            "isAvailable": false,
        },
        {
            "id": 2,
            "name": "2",
            "isAvailable": true,
        }
      ]});
  // const [seats, setSeats] = useState()

  // useEffect(() => {
  //   const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats`;
  //   const promise = axios.get(URL);

  //   promise.then((res) => {
  //     setSeats(res.data);
  //     console.log(res.data);
  //   });

  //   promise.catch((err) => alert(err.response.data));
  // }, []);

  // if (seats === undefined) {
  //   return <div>Carregando...</div>;
  // }

  return (
    <>
    <Header/>
    <Title3/>
      <StyledSelectedSeats>
        <StyledContainerSeats>
          {seats.map((seat) => (
            <StyledSeatsNumber>
              <p>{seat[3].id}</p>
            </StyledSeatsNumber>
          ))}
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
      <Footer/>
    </>
  );
}

const StyledSelectedSeats = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 150px;
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
  background: ${CINZACLARO};
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

  margin: 31px 20px;
  margin-bottom: 30px;

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

function Title3() {
  return (
    <StyledTitle>
      <p>Selecione o(s) assento(s)</p>
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

function Footer() {
  return (
    <StyledFooter>
      <ContainerFooter>
        <MovieBox>
          {<img src={filmeEnolaHolmes} alt="filme escolhido" />}
        </MovieBox>
        <p>Enola Holmes</p>
        <p>Quinta-feira - 15:00</p>
      </ContainerFooter>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`

  display: flex;
  align-items: center;
  background-color: ${CINZACLARO};
  width: 100%;
  height: 117px;
  border: 1px solid #9eadba;

  position:fixed;
  bottom:0px;
`;

const ContainerFooter = styled.div`
  display: flex;
  
  align-items: center;
  margin: 10px 14px ;
  p {
    margin-left: 14px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;

const MovieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 89px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  img {
    width: 48px;
    height: 72px;
  }
`;