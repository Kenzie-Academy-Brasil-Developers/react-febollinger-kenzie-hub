import styled from "styled-components";

export const StyledBtnBack = styled.button`
width:${props => props.size === "btnAdd" ? "33px" : props.size === "btnLogout" ? "67px" : ""};
height:32px;

border-radius:3px;
background-color:var(--color-grey3);
color: var(--color-greyLetters);

font-size:12pxpx;
font-weight:600;
line-height:28px;
cursor:pointer;

&:hover {
    border:1px solid var(--color-grey2);
    background-color:var(--color-grey2);
}
`;
