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
    margin: 0.8rem 0 0.8rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

}

& .sectionAdd > h2 {
    color: var(--color-greyLetters);
    font-size:16px;
    font-weight:600;
}

& .sectionList {
    width: 100%;
    height: 100%;
}

& .sectionList > ul {
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
    padding:0.8rem 0;

    background-color:var(--color-grey3);
    border:none;
    border-radius:4px;

    display:flex;
    flex-direction:column;
    gap:10px;
}

@media (min-width:750px){
    & .divMain {
        margin: 0 auto;
        width: 70%;
    }
}
`;