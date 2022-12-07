import styled from "styled-components";

export const StyledModal = styled.section`
width:296px;
height:250px;

background-color:var(--color-grey3);
margin:0 auto;

border:none;
border-radius:3px;

& div {
    height:40px;
    width:100%;
    padding:0 0.5rem;

    background-color:var(--color-grey2);
    border:none;
    border-radius: 3px 3px 0 0;

    display:flex;
    justify-content: space-between;
    align-items: center;
}

& div > h3 {
    color:var(--color-greyLetters);
    font-size:12px;
    font-weight:700;
    line-height:19px;
}

& div > span {
    color:var(--color-grey1);
    font-size:12px;
    font-weight:600;
    line-height:21px;
}
`;