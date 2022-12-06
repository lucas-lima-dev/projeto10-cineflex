import styled from "styled-components";
import { CINZACLARO, LARANJA } from "../constants/colors";

export default function Header() {
  return (
    <StyledHeader>
      <p>CINEFLEX</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: ${CINZACLARO};
  width: auto;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: ${LARANJA};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
  }
`;
