import styled from "styled-components";

export const StyledMain = styled.main`
width:100%;

position:relative;
top:73px;

& .divMain {
    margin: 0 auto;
    width: 95%;
    height:100%;
}

& .sectionAdd {
    height:32px;
    width:100%;
    margin-top: 0.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

}

& .sectionAdd > h2 {
    color: var(--color-greyLetters);
    font-size:16px;
    font-weight:600;
}

@media (min-width:750px){
    & .divMain {
        margin: 0 auto;
        width: 70%;
    }
}
`;