import styled from "styled-components";
import {
  CINZACLARO,
  LARANJA,
  VERDE,
  AMARELO,
  AVAILABLE,
  NOT_AVAILABLE,
  SELECTED,
} from "../constants/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import filmeEnolaHolmes from "../assets/enolaholmes.png";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

export default function SelectSeats() {
  const { idSessao } = useParams();
  const [sessionInfo, setSessionInfo] = useState();
  const [ids, setIds] = useState([]);

  function addSeat(id) {
    setIds([...ids, id]);
  }

  function removeSeat(removedId) {
    setIds(ids.filter((id) => id !== removedId));
  }

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
    const promise = axios.get(URL);

    promise.then((res) => {
      setSessionInfo(res.data);
      
    });

    promise.catch((err) => alert(err.response.data));
  }, []);

  if (sessionInfo === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <Title3 />
      <StyledSelectedSeats>
        <SeatsOptions
          seats={sessionInfo.seats}
          addSeat={addSeat}
          removeSeat={removeSeat}
        />
        <SeatStatus />
        <BuyerForm ids={ids} />
      </StyledSelectedSeats>
      <Footer />
    </>
  );
}

function SeatsOptions({ seats, addSeat, removeSeat }) {
  return (
    <StyledContainerSeats>
      {seats.map((seat) => (
        <SeatsNumber
          key={seat.id}
          seat={seat}
          addSeat={addSeat}
          removeSeat={removeSeat}
        />
      ))}
    </StyledContainerSeats>
  );
}

function SeatsNumber({ seat, addSeat, removeSeat }) {
  const { name, isAvailable,id } = seat;
  const [isSelected, setIsSelected] = useState(false);

  const [color, setColor] = useState(isAvailable ? AVAILABLE : NOT_AVAILABLE);

  function handleClick(id) {
    if (!isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }
    if (!isSelected) {
      addSeat(id);
      setIsSelected(!isSelected);
      setColor(SELECTED);
      return;
    }
    removeSeat(id);
    setIsSelected(!isSelected);
    setColor(AVAILABLE);
  }

  return (
    <StyledSeatsNumber 
    onClick={ ()=> handleClick(id)} 
    data-test="seat" 
    color={color}
    >
      <p>{name}</p>
    </StyledSeatsNumber>
  );
}

function SeatStatus() {
  return (
    <ContainerColors>
      <ContatinerOption>
        <StyledSeatSelected></StyledSeatSelected>
        <p>Selecionado</p>
      </ContatinerOption>
      <ContatinerOption>
        <StyledSeatAvailable></StyledSeatAvailable>
        <p>Disponível</p>
      </ContatinerOption>
      <ContatinerOption>
        <StyledSeatUnAvailable></StyledSeatUnAvailable>
        <p>Indisponível</p>
      </ContatinerOption>
    </ContainerColors>
  );
}

function BuyerForm({ ids }) {
  console.log(ids)
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

  function bookSeat(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    const body = {
      ids ,
      name ,
      cpf 
    };
    console.log(body)
    axios.post(URL, body).then(() => navigate("/sucesso"));
  }

  return (
    <form onSubmit={bookSeat}>
      <StyledDadosComprador bookSeat={bookSeat}>
        <p>Nome do comprador:</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Digite seu nome..."
          required
        />
        <p>CPF do comprador:</p>
        <input
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          type="number"
          placeholder="Digite seu CPF..."
          required
        />
      </StyledDadosComprador>
      <StyledButon type="submit">
        <p>Reservar assento(s) </p>
      </StyledButon>
    </form>
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
  background: ${(props) => props.color.background};
  border: 1px solid ${(props) => props.color.border};
  border-radius: 12px;
  position: relative;
  cursor: pointer;

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
const StyledSeatSelected = styled.div`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  background: ${VERDE};
  border: 1px solid #0e7d71;
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

const StyledSeatAvailable = styled.div`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  background: ${CINZACLARO};
  border: 1px solid #7b8b99;
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
const StyledSeatUnAvailable = styled.div`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  background: ${AMARELO};
  border: 1px solid #f7c52b;
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

  position: fixed;
  bottom: 0px;
`;

const ContainerFooter = styled.div`
  display: flex;

  align-items: center;
  margin: 10px 14px;
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
