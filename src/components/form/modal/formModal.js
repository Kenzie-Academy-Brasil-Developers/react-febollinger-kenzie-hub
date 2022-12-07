import styled from "styled-components";

export const StyledFormModal = styled.form`
width:95%;
height:84%;
margin: 0 auto;

display: flex;
flex-direction: column;
justify-content: space-evenly;

& label {
    display:flex;
    flex-direction:column;
    gap:12px;

    color:var(--color-greyLetters);
    font-size:10px;
    font-weight:400;
    line-height:0px;
}

& label > input {
    width:100%;
    height:39px;

    background-color:var(--color-grey2);
    border:1px solid var(--color-greyLetters);
    border-radius:3px;

    color:var(--color-greyLetters);
    font-size:13px;
    font-weight:400;
    line-height:21px;
    padding: 0 5px;
}

& label > select {
    width:100%;
    height:39px;

    background-color:var(--color-grey2);
    border:1px solid var(--color-greyLetters);
    border-radius:3px;

    color:var(--color-greyLetters);
    font-size:13px;
    font-weight:400;
    line-height:21px;
    padding: 0 5px;
}

& p {
    color:var(--color-grey1);
    font-size:10px;
    font-weight:400;
    line-height:1px;

    align-self:center;
}
`;