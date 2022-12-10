import styled from "styled-components";
import { LARANJA, CINZACLARO } from "../constants/colors";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

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

  console.log(movieInfo.days);
  return (
    <>
      <Header />
      <Title2 />
      {movieInfo.days.map((session) => (
        <Sessions key={session.id} session={session} />
      ))}

      <Footer movieInfo={movieInfo} />
    </>
  );
}

function Sessions({ session }) {
  const { weekday, date, showtimes } = session;
  return (
    <StyledSelectSession data-test='movie-day'>
      <p>
        {weekday} - {date}
      </p>
      <ContainerButton>
        {showtimes.map((showtime) => (
          <StyledButon key={showtime.id}>{showtime.name}</StyledButon>
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
  border: none;
  border-radius: 3px;
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

function Footer({ movieInfo }) {
  const { title, posterURL } = movieInfo;
  return (
    <StyledFooter>
      <ContainerFooter>
        <MovieBox>{<img src={posterURL} alt="filme escolhido" />}</MovieBox>
        <p>{title}</p>
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
