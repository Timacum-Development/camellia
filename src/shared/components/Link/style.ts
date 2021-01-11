import styled from "styled-components";
import { color } from "../../styles";

export const FooterLink = styled.a`
  font-size: 0.9375rem;
  font-family: "Roboto Slab", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: ${color.white};
  opacity: 0.6;
  letter-spacing: 2px;
  transition: opacity 0.25s ease-in;

  &:hover {
    opacity: 1;
  }
`;
