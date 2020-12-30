import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

export const FlowerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
`;

export const FlowerImg = styled.img`
  display: block;
`;

export const FlowerText = styled.div`
  position: relative;
  margin-bottom: 57px;

  &:after {
    content: "";
    width: 221px;
    height: 2px;
    background-color: ${color.grey};
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlowerName = styled.h3`
  font-size: 3.125rem;
  color: ${color.darkPurple};
  text-align: center;
  margin-bottom: 15px;
`;

export const FlowerPrice = styled.h5`
  font-size: 0.9375rem;
  color: ${color.darkPurple};
  opacity: 0.5;
  text-align: center;
`;

export const BuyNow = styled.a`
  font-size: 0.8125rem;
  font-family: "Roboto Slab", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: ${color.blue};
  letter-spacing: 2px;
`;

export const BuyImg = styled.img`
  display: block;
  margin-bottom: 13px;
`;