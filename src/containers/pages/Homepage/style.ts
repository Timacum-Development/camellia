import styled from "styled-components";
import { color } from "../../../shared/styles";

// Assets
import Background from "../../../assets/background.jpg";

export const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${Background}) no-repeat center;
  background-size: cover;
`;
