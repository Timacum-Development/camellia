import styled from "styled-components";
import { color } from "../../../shared/styles";

export const CtaFirst = styled.a`
  border: 2px solid ${color.white};
  color: ${color.white};
  position: relative;
  transition: 0.25s ease-in-out;

  &:before {
    content: "";
    width: 100%;
    height: 120%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 4rem;
  }

  &:hover {
    color: ${color.purple};
    background-color: ${color.white};
  }
`;

export const CtaSecond = styled.a`
  border: 2px solid ${color.purple};
  color: ${color.purple};
  position: relative;
  transition: 0.25s ease-in-out;

  &:before {
    content: "";
    width: 100%;
    height: 120%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    border: 1px solid rgba(158, 64, 174, 0.5);
    border-radius: 4rem;
  }

  &:hover {
    color: ${color.white};
    background-color: ${color.purple};
  }
`;

export const CtaThird = styled.a`
  background-color: ${color.blue};
  color: ${color.white};
  position: relative;
  transition: 0.25s ease-in-out;
  border: 1px solid transparent;

  &:before {
    content: "";
    width: 100%;
    height: 120%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10%;
    border: 1px solid ${color.blue};
    border-radius: 4rem;
    z-index: -1;
  }

  &:hover {
    background-color: ${color.white};
    color: ${color.blue};
    border: 1px solid ${color.blue};
  }
`;
