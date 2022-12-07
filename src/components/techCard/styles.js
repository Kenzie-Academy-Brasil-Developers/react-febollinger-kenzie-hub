import styled from "styled-components";

export const StyledCard = styled.li`
width:95%;
height:48px;
margin:0px auto;

background-color:var(--color-grey4);
border:none;
border-radius:4px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

& h2 {
    color: var(--color-greyLetters);
    font-size:16px;
    font-weight:700;
    line-height:24px;
    margin-left:10px;
}

& div {
width:80px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
}

& div > h3 {
    color: var(--color-grey1);
    font-size:12px;
    font-weight:400;
    line-height:22px;
}

& div > button {
    cursor:pointer;

    background-color:transparent;
    color:var(--color-grey1);
    height:14px;
}
`;