import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	border: 0;
    box-sizing:border-box;
	font-size: 100%;
	font-family: 'Inter', sans-serif;
	text-decoration:none;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: var(--color-black);
}
ol, ul {
	list-style: none;
}


:root{
	--color-primary:#FF577F;
	--color-primary-focus:#FF427F;
	--color-primary-negative: #59323F;
	--color-grey4:#121214;
	--color-grey3:#212529;
	--color-grey2:#343B41;
	--color-grey1:#868E96;
	--color-greyLetters:#F8F9FA;
	--color-black:#000000;
	--color-white:#FFFFFF;
}
`