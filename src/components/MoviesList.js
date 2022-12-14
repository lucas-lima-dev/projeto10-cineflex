import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function MoviesList() {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(URL);

    promise.then((res) => {
      setMovies(res.data);
    });
    promise.catch((err) => alert(err.response.data));
  }, []);

  if (movies === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <Title1 />
      <ContainerMovies>
        {movies.map((movie) => (
          <StyledMoviesList key={movie.id}>
            <Link to={`/sessoes/${movie.id}`} data-test='movie'>
              {<img src={movie.posterURL} alt={movie.title} />}
            </Link>
          </StyledMoviesList>
        ))}
      </ContainerMovies>
    </>
  );
}

const ContainerMovies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 11px 30px;
  margin-right: 25px;
  margin-left: 30px;
  margin-bottom: 50px;
`;
const StyledMoviesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 209px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  img {
    width: 129px;
    height: 193px;
  }
`;

function Title1() {
  return (
    <StyledTitle>
      <p>Selecione o filme</p>
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
