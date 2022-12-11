import styled from "styled-components";

import { CINZACLARO } from "../constants/colors";

export default function Footer({ movieInfo, day, time }) {
  const { title, posterURL } = movieInfo;
  // console.log(time);
  return (
    <StyledFooter data-test='footer'>
      <ContainerFooter>
        <MovieBox>{<img src={posterURL} alt="filme escolhido" />}</MovieBox>
        <ShowInfo>
          <p>{title}</p>
          {day && (
            <p>
              {day.weekday} - {time}
            </p>
          )}
        </ShowInfo>
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
  flex-direction: column;
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

const ShowInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
