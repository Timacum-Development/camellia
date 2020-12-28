import { createGlobalStyle } from "styled-components";

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
`;
