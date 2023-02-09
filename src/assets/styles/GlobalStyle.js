import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;
		font: normal normal 10px/1.2 'SpoqaHanSansNeo', sans-serif;
	}
	
	html,
	body,
	div,
	span,
	object,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	abbr,
	address,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	samp,
	small,
	strong,
	sub,
	sup,
	var,
	b,
	i,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section,
	summary,
	time,
	mark,
	audio,
	video,
	textarea,
	button,
	select,
	input,
	pre {
		margin: 0;
		padding: 0;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	hr {
		display: none;
	}

	select {
		outline: none;
	}

	p,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	form {
		list-style-image: none;
		list-style-position: outside;
		list-style-type: none;
		border: 0px;
	}

	img,
	fieldset {
		border: 0 none;
	}

	button {
		border: 0 none;
		background-color: transparent;
		cursor: pointer;
	}

	address,
	caption,
	cite,
	code,
	dfn,
	em,
	var {
		font-style: normal;
		font-weight: normal;
	}

	a {
		text-decoration: none;
	}

	button,
	input,
	select,
	table,
	textarea {
		font-family: 'SpoqaHanSansNeo', sans-serif;
	}
	
	input:focus {
    outline: none;
	}
	
	textarea:focus {
		outline: none;
	}

	button > span {
		position:relative;
	}
`;
export default GlobalStyle;
