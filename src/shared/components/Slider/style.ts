import styled from "styled-components";
import { color } from "../../../shared/styles";

export const VerticalSlider = styled.div`
  display: flex;
`;

export const HorizontalSlider = styled.div`
  display: flex;
`;

export const Dot = styled.div`
  width: 11px;
  height: 11px;
  background-color: ${color.white};
  border-radius: 50%;
`;
