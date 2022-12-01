import styled from "styled-components";

export const StyledMain = styled.main`
width:100%;

position:relative;
top:73px;

& .divMain {
    margin: 0 auto;
    width: 95%;
}

& .divMain > h1 {
    font-size:18px;
    font-weight:700;
    line-height:28px;

    padding:2rem 0;

    color:var(--color-greyLetters);
}

& .divMain > p {
    font-size:16px;
    font-weight:400;
    line-height:24px;

    color:var(--color-white);
}

@media (min-width:750px){
    & .divMain {
        margin: 0 auto;
        width: 70%;
    }
}
`;