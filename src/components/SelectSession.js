import styled from "styled-components";
import { LARANJA, CINZACLARO } from "../constants/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";

export default function SelectSession() {
  const [movieInfo, setMovieInfo] = useState();
  const { idFilme } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
    const promise = axios.get(URL);

    promise.then((res) => {
      setMovieInfo(res.data);
    });
    promise.catch((err) => alert(err.response.data));
  }, [idFilme]);

  if (movieInfo === undefined) {
    return <div>Carregando...</div>;
  }

  // console.log(movieInfo.days);
  return (
    <>
      <Header />
      <Title2 />
      <ShowSessions>
        {movieInfo.days.map((session) => (
          <Sessions key={session.id} session={session} />
        ))}
      </ShowSessions>

      <Footer movieInfo={movieInfo} />
    </>
  );
}
const ShowSessions = styled.div`
  margin-bottom: 150px;
`;

function Sessions({ session }) {
  const { weekday, date, showtimes } = session;
  return (
    <StyledSelectSession data-test="movie-day">
      <p>
        {weekday} - {date}
      </p>
      <ContainerButton>
        {showtimes.map((showtime) => (
          <Link data-test="showtime" to={`/assentos/${showtime.id}`}>
            <StyledButon key={showtime.id}>
              <p>{showtime.name}</p>
            </StyledButon>
          </Link>
        ))}
      </ContainerButton>
    </StyledSelectSession>
  );
}
const StyledSelectSession = styled.div`
  margin: 23px;
  p {
    width: auto;
    height: 35px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;
const StyledButon = styled.button`
  width: 82px;
  height: 43px;
  background-color: ${LARANJA};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  p {
    text-decoration: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;

function Title2() {
  return (
    <StyledTitle>
      <p>Selecione o horário</p>
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
