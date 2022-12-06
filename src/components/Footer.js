import styled from "styled-components";
import filme2067 from "../assets/2067.png";
import filmeEnolaHolmes from "../assets/enolaholmes.png";
import { CINZACLARO } from "../constants/colors";

export default function Footer() {
  return (
    <StyledFooter>
      <ContainerFooter>
        <MovieBox>
          {<img src={filmeEnolaHolmes} alt="filme escolhido" />}
        </MovieBox>
        <p>Enola Holmes</p>
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

  position:absolute;
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
