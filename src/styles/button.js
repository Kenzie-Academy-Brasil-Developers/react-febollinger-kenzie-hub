import styled from "styled-components";

export const StyledButton = styled.button `
width:100%;
height:38px;

background-color: ${props => props.buttonColor === "entrar" ? "var(--color-primary)" : props.buttonColor === "cadastrar" ? "var(--color-grey1)" : ""};

border: 1px solid ${props => props.buttonColor === "entrar" ? "var(--color-primary)" : props.buttonColor === "cadastrar" ? "var(--color-grey1)" : ""};
border-radius:3px;

color: ${props => props.buttonColor === "entrar" ? "var(--color-white)" : props.buttonColor === "cadastrar" ? "var(--color-greyLetters)" : ""};

font-size:13px;
font-weight:500;
line-height:21px;
cursor:pointer;

&:hover {
    background-color:var(--color-primary-focus);
    border:1px solid var(--color-primary-focus);
}

`

