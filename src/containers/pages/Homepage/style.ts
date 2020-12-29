import styled from "styled-components";
import { color } from "../../../shared/styles";

// Assets
import Background from "../../../assets/background.jpg";
import Woman1 from "../../../assets/woman1.png";
import Woman2 from "../../../assets/woman2.png";
import WelcomeBg from "../../../assets/black-and-white.png";

export const Hero = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 55px);
  background: url(${Background}) no-repeat center;
  background-size: cover;
  position: relative;
`;

export const PurpleLine = styled.div`
  width: 794px;
  height: 7px;
  background-color: ${color.purple};
  position: relative;
  z-index: -1;

  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -50px;
    border-top: 50px solid ${color.purple};
    border-right: 50px solid transparent;
  }
`;

export const HeroIntro = styled.div`
  position: relative;
  top: -70px;
`;

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
  /* top: 318px; */
  top: 234px;
`;

export const BlueFlower = styled.img`
  display: block;
  width: 476px;
  height: 493px;
  position: relative;
  left: 80px;
  bottom: 100px;
  z-index: 1;
`;

export const SideWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 40%;
  position: absolute;
  bottom: 100px;
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
  left: 210px;
  bottom: -310px;
  transform: rotate(46deg);
  filter: drop-shadow(5px 0px 5px ${color.black});
`;

export const SecondLine = styled.div`
  width: 2px;
  height: 738px;
  background-color: ${color.white};
  position: relative;
  right: 15px;
  top: -350px;
  transform: rotate(46deg);
`;

export const Shop = styled.section`
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 720px;
    height: 7px;
    background-color: ${color.purple};
    clip-path: polygon(0% 0%, 1% 0%, 0% 100%, 100% 100%, 100% 0%);
    position: absolute;
    right: 283px;
    top: -100px;
    z-index: 100;
  }
`;

export const WhiteBg = styled.div`
  width: 60%;
  height: 451px;
  background-color: ${color.white};
  clip-path: polygon(13% 0%, 0% 28%, 0% 100%, 100% 100%, 100% 0%);
  position: absolute;
  top: -100px;
  right: 0;
  z-index: -1;
`;

export const PurpleHeroLine = styled.div`
  width: 1px;
  height: 127px;
  background-color: ${color.purple};
  position: absolute;
  left: 738px;
  bottom: -110px;
  transform: rotate(48deg);
`;

export const WhiteHeroLine = styled.div`
  width: 1px;
  height: 348px;
  background-color: ${color.white};
  position: absolute;
  left: 52%;
  bottom: 0;
  transform: rotate(48deg);
  filter: drop-shadow(5px 0px 5px ${color.black});
`;

export const InsideWrap = styled.div`
  display: flex;
`;

export const TextWrap = styled.div`
  width: 50%;
  max-width: 590px;
  margin-right: 106px;
  padding: 196px 0 290px 0;
`;

export const ImageWrap = styled.div`
  width: 50%;
  position: relative;
  padding-top: 81px;
`;

export const WomanFirst = styled.div`
  width: 100%;
  max-width: 591px;
  height: 621px;
  background: url(${Woman1}) no-repeat center;
`;

export const WomanSecond = styled.div`
  width: 641px;
  height: 421px;
  background: url(${Woman2}) no-repeat center;
  position: absolute;
  right: 150px;
  bottom: -20px;
  z-index: 50;
`;

export const Welcome = styled.section`
  width: 100%;
  background: url(${WelcomeBg}) no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${color.white};
    left: 0;
    top: 0;
    opacity: 0.9;
    z-index: -1;
  }
`;

export const LineWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 1642px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const WelcomeLine = styled.div`
  width: 60%;
  height: 7px;
  background-color: ${color.purple};
`;

export const WelcomeLineSecond = styled.div`
  width: 40%;
  height: 7px;
  background-color: ${color.blue};
  position: relative;

  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -50px;
    right: 0;
    border-left: 50px solid transparent;
    border-bottom: 50px solid ${color.blue};
  }
`;

export const WelcomeText = styled.div`
  display: flex;
  justify-content: center;
  padding: 258px 0 119px 0;
`;
