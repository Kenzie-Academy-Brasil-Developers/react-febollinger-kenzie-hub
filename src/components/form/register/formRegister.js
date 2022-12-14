import styled from "styled-components";

export const StyledFormRegister = styled.form`
height: 80%;
width: 90%;

padding:0.5rem 0;

display: flex;
flex-direction: column;
align-self: center;
gap:10px;;

& label {
    font-size:10px;
    font-weight:400;
    line-height:0px;
            
    color:var(--color-greyLetters);
}
    
& input {
    padding: 0px 13.0293px;
    
    width:100%;
    height:38px;
    
    background-color: var(--color-grey2);
    border:0.98px solid var(--color-greyLetters);
    border-radius:3px;
    
    font-size:13px;
    font-weight:400;
    line-height:21px;
        
    color:var(--color-greyLetters);
}

& p {
    align-self:center;
    font-size:10px;
    font-weight:400;
    line-height:18px;
        
    color:var(--color-grey1);
}

& select {
    width:100%;
    height:38px;

    background-color: var(--color-grey2);
    border:0.98px solid var(--color-greyLetters);
    border-radius:3px;

    font-size:13px;
    font-weight:400;
    line-height:21px;
        
    color:var(--color-greyLetters);
}
`;