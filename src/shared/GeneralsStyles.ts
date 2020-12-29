import { createGlobalStyle } from "styled-components";
import { color } from "../shared/styles";

export default createGlobalStyle`
	@font-face {
    font-family: 'geomanistitalic';
    src: url('geomanist-regular-italic-webfont.eot');
    src: url('geomanist-regular-italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('geomanist-regular-italic-webfont.woff2') format('woff2'),
         url('geomanist-regular-italic-webfont.woff') format('woff'),
         url('geomanist-regular-italic-webfont.ttf') format('truetype'),
         url('geomanist-regular-italic-webfont.svg#geomanistitalic') format('svg');
    font-weight: normal;
    font-style: normal;

	}

	@font-face {
		font-family: 'geomanistregular';
		src: url('geomanist-regular-webfont.eot');
		src: url('geomanist-regular-webfont.eot?#iefix') format('embedded-opentype'),
			url('geomanist-regular-webfont.woff2') format('woff2'),
			url('geomanist-regular-webfont.woff') format('woff'),
			url('geomanist-regular-webfont.ttf') format('truetype'),
			url('geomanist-regular-webfont.svg#geomanistregular') format('svg');
		font-weight: normal;
		font-style: normal;

	}

	html, body, #root {
		height: 100%;
		margin: 0;
		font-family: 'Playfair Display', 'Roboto Slab', serif;
		box-sizing: border-box;
		font-size: 16px;
	}

	* {
		box-sizing: border-box;
	}

	body {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		flex: 1 0 auto;
		width: 100%;
	}

	p {
		margin: 0;
	}


	.App {
		display: flex;
		flex-wrap: wrap;
	}

	.container-fluid {
		width: 100%;
	}


	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		text-align: left;
	}

	a {
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
	}

	button {
		cursor: pointer;
	}

	h1 {
		font-size: 10rem;
		color: ${color.white};
	}

	h2 {
		font-size: 4.5rem;
		margin-bottom: 17px;
	}

	h3 {
		font-size: 3.125rem;
	}

	h4 {
		font-size: 1.0625rem;
		font-family: 'Roboto Slab', serif;
		color: ${color.white};
		margin-bottom: 44px;
		text-transform: uppercase;
		letter-spacing: 5px;
	}

	h5 {
		font-size: 0.9375rem;
	}

	h6 {
		font-size: 0.75rem;
		font-family: 'Roboto Slab', serif;
		color: ${color.white};
		letter-spacing: 2px;
	}

	p {	
		font-size: 1.0625rem;
		font-family: 'geomanistitalic', sans-serif;
		color: ${color.lightBlack};
		line-height: 2;
		margin-bottom: 51px;
	}

	.cta {
		padding: 25px 51px;
		border-radius: 4rem;
  		text-align: center;
  		font-family: 'Roboto Slab', serif;
		font-weight: 700;
		letter-spacing: 5px;
		text-transform: uppercase;
	}

	.dot {
		width: 7px;
  		height: 7px;
  		border-radius: 50%;
	}

	.container {
		max-width: 1280px;
		width: 100%;
		margin: 0 auto;
	}
`;
