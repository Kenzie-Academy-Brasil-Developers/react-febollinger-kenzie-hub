import styled from "styled-components";

export const StyledCard = styled.li`
width:95%;
min-height:48px;
margin:0px auto;

background-color:var(--color-grey4);
border:none;
border-radius:4px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

& h3 {
    color: var(--color-greyLetters);
    font-size:16px;
    font-weight:700;
    line-height:24px;
    margin-left:10px;
}

& div {
width:100px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
}

& div > h4 {
    color: var(--color-grey1);
    font-size:12px;
    font-weight:400;
    line-height:22px;
}

& div > button {
    cursor:pointer;
    padding-right:0.3rem;

    background-color:transparent;
    color:var(--color-grey1);
    height:16px;
    width:25px;
}
`;