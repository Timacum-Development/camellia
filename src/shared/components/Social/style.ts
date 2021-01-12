import styled, { keyframes } from "styled-components";

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;
export const IconAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1.3);
  }
`;

export const SocialIcon = styled.img`
  display: block;

  &:hover {
    animation: ${IconAnimation} 0.5s ease-in-out forwards;
  }
`;
