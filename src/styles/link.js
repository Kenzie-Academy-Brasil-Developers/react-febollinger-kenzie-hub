import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link) `
width:${props => props.color === "back" ? "67px" : props.color === "cadastrar" ? "100/" : ""};
padding:0.5rem;

background-color: ${props => props.color === "back" ? "var(--color-grey3)" : props.color === "cadastrar" ? "var(--color-grey1)" : ""};

border: 1px solid ${props => props.color === "back" ? "var(--color-grey3)" : props.color === "cadastrar" ? "var(--color-grey1)" : ""};
border-radius:3px;

color: ${props => props.color === "back" ? "var(--color-greyLetters)" : props.color === "cadastrar" ? "var(--color-greyLetters)" : ""};

font-size:13px;
font-weight:500;
line-height:21px;
cursor:pointer;
text-align:center;

&:hover {
    background-color:var(--color-primary-focus);
    border:1px solid var(--color-primary-focus);
}

`