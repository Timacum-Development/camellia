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
  width: 735px;
  height: 7px;
  background-color: ${color.purple};
  position: absolute;
  top: 0;
  z-index: 10;
  right: 0;
`;
