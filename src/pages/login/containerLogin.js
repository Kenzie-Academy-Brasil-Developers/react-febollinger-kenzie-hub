import styled from "styled-components";

export const StyledDivLogin = styled.div`
width:100%;
height:100vh;

background-color: var(--color-black);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:2rem;

& .sectionLogoLogin{
width:90%;
height:10%;
padding-top:1rem;

display: flex;
align-items: center;
justify-content: center;
}


& .formLogin {
width:90%;
height:70%;

display: flex;
flex-direction: column;

background-color: var(--color-grey3);
border:none;
border-radius:3px;
box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
}

& .formLogin > h2 {
    font-size:15px;
    font-weight:700;
    line-height:22px;
    padding:1rem 0;
    
    color:var(--color-greyLetters);
    align-self:center;
}

& .formLogin > p{
    font-size:10px;
    font-weight:400;
    line-height:18px;
   
    color:var(--color-grey1);
    align-self:center;

    padding:0.5rem 0;
}

& .formLogin > div {
width:90%;
align-self:center;

display: flex;
flex-direction: column;
gap:1rem;
}

& .formLogin > div > span {
align-self:center;

font-size:10px;
font-weight:600;
line-height:14px;
color:var(--color-grey1);
}


@media (min-width:500px){
    & .sectionLogoRegister {
        width:60%;
    }

    & .formLogin {
        width:60%;
    }
}

@media (min-width:600px){
    & .sectionLogoRegister {
        width:40%;
    }

    & .formLogin {
        width:40%;
    }
}

@media (min-width:800px){
    & .sectionLogoRegister {
        width:35%;
    }

    & .formLogin {
        width:35%;
        height: 65%;
    }
}

@media (min-width:900px){
    & .sectionLogoRegister {
        width:30%;
    }

    & .formLogin {
        width:25%;
        
    }
}
`;