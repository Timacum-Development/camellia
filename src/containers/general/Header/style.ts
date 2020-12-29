import styled from "styled-components";
import { color } from "../../../shared/styles";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 60px 60px 36px 60px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Burger = styled.button`
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 23px;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const BurgerLine = styled.span`
  display: block;
  width: 37px;
  height: 2px;
  background-color: ${color.purple};

  &:nth-child(2) {
    width: 30px;
    position: relative;
    right: -7px;
  }
`;
