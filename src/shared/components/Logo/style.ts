import styled, { keyframes } from 'styled-components';

export const LogoAnimation = keyframes`
  0%{
    transform: translateX(0);
  }

  100%{
    transform: translateX(-15px);
  }

`;

export const LogoWrap = styled.div`
	display: flex;
	align-items: center;

	&:hover {
		animation: ${LogoAnimation} 0.5s ease-in-out forwards;
	}
`;

export const LogoFlower = styled.img`
	display: block;
	width: 57px;
	height: 57px;
	margin-right: 16px;
`;

export const LogoName = styled.img`
	display: block;
`;
