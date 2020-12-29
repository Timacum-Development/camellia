import styled from "styled-components";
import { color } from "../../../shared/styles";

export const WhiteSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 57px;
`;

export const WhiteArrowFirst = styled.div`
  width: 3px;
  height: 48px;
  background-color: ${color.white};
  margin-bottom: 23px;
  position: relative;

  &:before {
    content: "";
    width: 3px;
    height: 15px;
    background-color: ${color.white};
    position: absolute;
    left: 5px;
    transform: rotate(-38deg);
  }
`;

export const WhiteArrowSecond = styled.div`
  width: 3px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;

  &:before {
    content: "";
    width: 3px;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 5px;
    bottom: 0;
    transform: rotate(38deg);
  }
`;

export const BlueSlider = styled.div`
  display: flex;
`;

export const PurpleSlider = styled.div`
  display: flex;
  align-items: center;
  padding: 55px 0 30px 101px;
`;

export const WhiteDot = styled.div`
  border: 1px solid ${color.white};
  margin-bottom: 23px;
  transition: all 0.25s ease-in;

  &:hover {
    background-color: ${color.white};
  }
`;

export const BlueDot = styled.div`
  border: 1px solid ${color.blue};
`;

export const PurpleDot = styled.div`
  border: 1px solid ${color.purple};
  margin-right: 23px;
  transition: all 0.25s ease-in;

  &:hover {
    background-color: ${color.purple};
  }
`;

export const PurpleArrowFirst = styled.div`
  width: 41px;
  height: 3px;
  background-color: rgba(158, 64, 174, 0.3);
  margin-right: 29px;
  position: relative;

  &:before {
    content: "";
    width: 15px;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: -5px;
    background-color: rgba(158, 64, 174, 0.3);
    transform: rotate(40deg);
  }
`;

export const PurpleArrowSecond = styled.div`
  width: 41px;
  height: 3px;
  background-color: ${color.purple};
  position: relative;

  &:before {
    content: "";
    width: 15px;
    height: 3px;
    position: absolute;
    right: 0;
    bottom: -5px;
    background-color: ${color.purple};
    transform: rotate(-40deg);
  }
`;
