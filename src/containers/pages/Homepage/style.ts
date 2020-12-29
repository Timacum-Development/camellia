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
  position: relative;
  left: 350px;
  bottom: 100px;
  width: 966px;
`;

export const PinkFlower = styled.img`
  display: block;
  width: 494px;
  height: 474px;
  position: relative;
  top: 318px;
`;

export const BlueFlower = styled.img`
  display: block;
  width: 476px;
  height: 493px;
  position: relative;
  left: 80px;
  z-index: 1;
`;

export const SideWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 50%;
  position: absolute;
  bottom: 20px;
  right: 65px;
`;

export const SideIcon = styled.img`
  display: block;
`;

export const FirstLine = styled.div`
  width: 2px;
  height: 738px;
  background-color: ${color.white};
  position: relative;
  left: 300px;
  bottom: -310px;
  transform: rotate(46deg);
`;

export const SecondLine = styled.div`
  width: 2px;
  height: 738px;
  background-color: ${color.white};
  position: relative;
  right: 15px;
  top: -250px;
  transform: rotate(46deg);
`;
