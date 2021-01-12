import styled, { keyframes } from "styled-components";
import { color } from "../../../shared/styles";

// Assets
import Background from "../../../assets/background.jpg";
import Woman1 from "../../../assets/woman1.png";
import Woman2 from "../../../assets/woman2.png";
import WelcomeBg from "../../../assets/black-and-white.png";
import Gallery1 from "../../../assets/room.png";
import Gallery2 from "../../../assets/gardening.png";
import FlowerBg from "../../../assets/pink-flowers.png";
import Woman3 from "../../../assets/woman3.png";
import ProductBcg from "../../../assets/black-white.png";
import HeroFlower from "../../../assets/flower-bg-hero.jpg";

export const FlowerPink = keyframes`
  0% {
    transform: perspective(300px) translateZ(-600px);
  }

  100% {
    transform: translateZ(0px);
  }
`;

export const FlowerBlue = keyframes`
  0% {
    transform: perspective(300px) translateZ(-600px);
  }

  100% {
    transform: translateZ(0px);
  }
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  background: url(${Background}) no-repeat center;
  height: calc(100vh - 55px);
  background-size: cover;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url(${HeroFlower}) no-repeat;
    /* background-size: cover; */
    background-attachment: fixed;
    background-position: 100% 30%;

    opacity: 0.15;
    mix-blend-mode: overlay;
  }
`;

export const PurpleLine = styled.div`
  /* width: 794px; */
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

  &:after {
    content: "";
    width: 1px;
    height: 400px;
    background-color: ${color.white};
    position: absolute;
    top: -80%;
    right: -35%;
    transform: rotate(45deg);
  }
`;

export const CtaWrap = styled.div`
  display: flex;
  align-items: center;
  animation: ${FlowerPink} 1.2s ease-in-out forwards;
`;

export const FlowerWrap = styled.div`
  position: relative;
  left: 350px;
  bottom: 100px;
  width: 966px;

  &:before {
    content: "";
    width: 1px;
    height: 200px;
    background-color: ${color.white};
    filter: drop-shadow(5px 0px 5px ${color.black});
    position: absolute;
    top: 25%;
    left: -30%;
    transform: rotate(45deg);
  }
`;

export const PinkFlower = styled.img`
  display: block;
  width: 494px;
  height: 474px;
  position: relative;
  /* top: 318px; */
  top: 234px;
  animation: ${FlowerPink} 1.2s ease-in-out forwards;
`;

export const BlueFlower = styled.img`
  display: block;
  width: 476px;
  height: 493px;
  position: relative;
  left: 80px;
  bottom: 100px;
  z-index: 1;
  animation: ${FlowerBlue} 1.2s ease-in-out forwards;
`;

export const SideWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 40%;
  position: absolute;
  bottom: 120px;
  right: 65px;
`;

export const SideIcon = styled.img`
  display: block;
`;

export const FirstLine = styled.div`
  width: 1px;
  height: 738px;
  background-color: ${color.white};
  position: relative;
  left: 210px;
  bottom: -310px;
  transform: rotate(46deg);
  filter: drop-shadow(5px 0px 5px ${color.black});
`;

export const SecondLine = styled.div`
  width: 1px;
  height: 738px;
  background-color: ${color.white};
  position: relative;
  right: 15px;
  top: -350px;
  transform: rotate(46deg);
`;

export const Shop = styled.section`
  position: relative;
  z-index: 100;

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
  z-index: 100;
`;

export const WomanFirst = styled.div`
  width: 100%;
  max-width: 591px;
  height: 650px;
  background: url(${Woman1}) no-repeat center;
`;

export const WomanSecond = styled.div`
  width: 641px;
  height: 450px;
  background: url(${Woman2}) no-repeat center;
  position: absolute;
  right: 150px;
  bottom: -50px;
  z-index: 50;
  filter: drop-shadow(0px 5px 15px ${color.black});
`;

export const WomanLine = styled.div`
  width: 1px;
  height: 1400px;
  background-color: ${color.blue};
  transform: rotate(45deg);
  z-index: -1;
  position: absolute;
  left: 67%;
`;

export const WomanLineSecond = styled.div`
  width: 1px;
  height: 708px;
  background-color: ${color.purple};
  opacity: 0.5;
  transform: rotate(45deg);
  position: absolute;
  left: 0;
  top: 45%;
`;

export const Welcome = styled.section`
  width: 100%;
  height: 0;
  padding-bottom: 64.25%;
  background: url(${WelcomeBg}) no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 1;
  margin-bottom: 64px;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 1)
    );
    left: 0;
    top: 0;
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
  width: 100%;
  max-width: 1642px;
  height: 7px;
  background: linear-gradient(to right, ${color.purple} 60%, ${color.blue} 40%);
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
  padding: 258px 0 119px 0;
  text-align: center;
`;

export const Gallery = styled.div`
  display: flex;
  max-width: 1480px;
  margin: 0 auto;
  position: relative;
`;

export const GallerySlider = styled.div``;
export const Room = styled.div`
  width: 791px;
  height: 341px;
  background: url(${Gallery1}) no-repeat center;
`;

export const Garden = styled.div`
  width: 791px;
  height: 341px;
  background: url(${Gallery2}) no-repeat center;
  margin-top: 100px;
  box-shadow: 0 20px 80px -40px ${color.black};
  position: absolute;
  right: 0;
`;

export const WelcomePurpleLine = styled.div`
  width: 1px;
  height: 1110px;
  background-color: ${color.purple};
  position: absolute;
  left: 60%;
  top: 20%;
  transform: rotate(45deg);
  z-index: -1;
`;

export const Service = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 0;
  padding-bottom: 22.25%;
  background: url(${FlowerBg}) no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 100;
  margin-bottom: 151px;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.95;
    z-index: -1;
    background: linear-gradient(
      to right,
      ${color.blue} 50%,
      ${color.purple} 50%
    );
  }
`;

export const ServiceLineFirst = styled.div`
  width: 1px;
  height: 175px;
  background-color: ${color.blue};
  position: absolute;
  left: 75%;
  z-index: 50;
  top: -100px;
  transform: rotate(45deg);
`;

export const ServiceLineSecond = styled.div`
  width: 1px;
  height: 400px;
  background-color: ${color.lightPurple};
  opacity: 0.5;
  position: absolute;
  left: 45%;
  z-index: 50;
  bottom: -300px;
  transform: rotate(45deg);
`;

export const Customers = styled.div`
  display: flex;
  width: 100%;
  max-width: 1281px;
  height: 0;
  padding-bottom: 28.25%;
  background-color: ${color.white};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 20px 50px -40px ${color.black};
`;

export const CustomerImg = styled.div`
  width: 33%;
  height: 0;
  padding-bottom: 39.25%;
  background: url(${Woman3}) no-repeat center;
  position: relative;
  top: 80px;
  left: 60px;
`;

export const CustomerText = styled.div`
  position: relative;
  top: 162px;
  left: 150px;
  max-width: 600px;
`;

export const Quote = styled.img`
  display: block;
  width: 123px;
  height: 102px;
  opacity: 0.2;
  position: relative;
  left: 388px;
  top: -80px;
`;

export const CustomerLine = styled.div`
  width: 100%;
  height: 7px;
  position: relative;
  top: -5px;
  background: linear-gradient(
    to right,
    ${color.blue} 50%,
    ${color.darkPurple} 50%
  );

  &:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: -50px;
    border-left: 50px solid ${color.blue};
    border-top: 50px solid transparent;
  }
`;

export const Products = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 1px;
    height: 1250px;
    background-color: ${color.blue};
    position: absolute;
    transform: rotate(45deg);
    z-index: 10;
    left: 55%;
    top: -5%;
  }

  &:after {
    content: "";
    width: 1px;
    height: 655px;
    background-color: ${color.lightPurple};
    opacity: 0.5;
    position: absolute;
    transform: rotate(45deg);
    top: 45%;
  }
`;

// export const ProductBlueLine = styled.div`
//   width: 1px;
//   height: 1000px;
//   background-color: ${color.blue};
//   position: absolute;
//   left: 60%;
//   top: -55%;
//   transform: rotate(45deg);
//   z-index: -50;
// `;

export const ProductsBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  height: 300px;
  background-color: #fff;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 77% 100%, 0% 100%);
  position: absolute;
  z-index: -1;
  bottom: -100px;
`;

export const ProductsBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url(${ProductBcg}) no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 0.8) 90%
    );
    z-index: -1;
  }
`;

export const Flower = styled.div`
  display: flex;
  position: relative;
  z-index: 100;
  top: -110px;
  padding-bottom: 100px;
`;

export const SliderWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 100px;
`;
