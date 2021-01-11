import styled from "styled-components";
import { color } from "../../../shared/styles";

import BgFooter from "../../../assets/bg-rotated.jpg";
import FooterLayer from "../../../assets/footer-layer.png";

export const FooterWrap = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40%;
  background: url(${BgFooter}) no-repeat top;
  background-size: cover;
  position: relative;
  padding: 0 250px 0 60px;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    background: url(${FooterLayer}) no-repeat right center;
    background-size: cover;
    opacity: 0.1;
    mix-blend-mode: overlay;
  }

  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-right: 50px solid ${color.purple};
    border-top: 50px solid transparent;
    right: 0;
    top: -50px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  &:after {
    content: "";
    width: 740px;
    height: 2px;
    background-color: ${color.white};
    opacity: 0.5;
    position: absolute;
    right: -250px;
    bottom: 0;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  margin-bottom: 50px;
`;

export const FooterLine = styled.div`
  content: "";
  width: 781px;
  height: 7px;
  background-color: ${color.purple};
  position: absolute;
  top: 0;
  z-index: 10;
  right: 0;
  clip-path: polygon(1% 0%, 0% 100%, 100% 100%, 100% 0%);
`;

export const LineTop = styled.div`
  width: 720px;
  height: 7px;
  background-color: ${color.purple};
  position: absolute;
  left: 310px;
  top: 100px;
  clip-path: polygon(0% 0%, 100% 0%, 99% 100%, 0% 100%);
  z-index: 100;
`;

export const RotatedLine = styled.div`
  width: 1px;
  height: 500px;
  background-color: ${color.white};
  position: absolute;
  left: 916px;
  bottom: -71px;
  transform: rotate(45deg);
  z-index: 100;
  filter: drop-shadow(0 15px 10px ${color.black});
  z-index: 1;
`;
