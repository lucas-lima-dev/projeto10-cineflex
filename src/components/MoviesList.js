import styled from "styled-components";
import filme2067 from "../assets/2067.png";
import filmeEnolaHolmes from "../assets/enolaholmes.png";

export default function MoviesList() {
  return (
    <ContainerMovies>
      <StyledMoviesList>
        {<img src={filme2067} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filmeEnolaHolmes} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filme2067} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filmeEnolaHolmes} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filme2067} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filmeEnolaHolmes} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filme2067} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filmeEnolaHolmes} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filme2067} alt="movies" />}
      </StyledMoviesList>
      <StyledMoviesList>
        {<img src={filmeEnolaHolmes} alt="movies" />}
      </StyledMoviesList>
    </ContainerMovies>
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
