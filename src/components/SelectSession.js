import styled from "styled-components";
import { LARANJA } from "../constants/colors";

export default function SelectSession() {
  return (
    <StyledSelectSession>
      <p>Quinta-feira - 24/06/2021</p>
      <ContainerButton>
        <StyledButon>15:00</StyledButon>
        <StyledButon>15:00</StyledButon>
      </ContainerButton>
    </StyledSelectSession>
  );
}

const StyledSelectSession = styled.div`
  margin: 23px;
  p {
    width: 241px;
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
  gap:8px;
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
