import styled from "styled-components";

export const StyledHeader = styled.header`
width:100%;
height:130px;

border-bottom:1px solid var(--color-grey3);

position: relative;
top: 73px;

& .userInfo{
height:130px;
width:95%;
margin: 0 auto;

display: flex;
flex-direction: column;
justify-content: space-evenly;
}

& .userInfo > h2 {
    font-size:18px;
    font-weight:700;
    line-height:28px;

    color:var(--color-greyLetters);
}

& .userInfo > p {
    font-size:12px;
    font-weight:400;
    line-height:22px;

    color:var(--color-grey1);
}

@media (min-width:750px){
    height:118px;

    & .userInfo{
        width:70%;
        height:118px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
`;