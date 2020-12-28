import styled from "styled-components";
import { color } from "../../../shared/styles";

// Assets
import Background from "../../../assets/background.jpg";

export const Hero = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${Background}) no-repeat center;
  background-size: cover;
`;

export const HeroIntro = styled.div``;

export const CtaWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const FlowerWrap = styled.div`
  display: flex;
  position: relative;
  left: 300px;
  bottom: 100px;
  width: 966px;
`;

export const PinkFlower = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const BlueFlower = styled.img`
  display: block;
  position: absolute;
`;
