import styled from "styled-components";

export const StyledDivRegister = styled.div`
width:100%;
height:100%;

background-color: var(--color-black);

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap:2rem;

& .sectionLogoRegister {
    width:90%;
   height:20%;

   padding:1rem 0;
}

& .sectionLogoRegister > div {
    width:100%;

    display:flex;
    align-items: center;
    justify-content: space-between;
}

& .formRegister {
    width:85%;
    height:65%;
    
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    margin-bottom:1rem;

    background-color: var(--color-grey3);
    border:none;
    border-radius:3px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
}
    
& .formRegister > h2 {
        font-size:15px;
        font-weight:700;
        line-height:22px;
        padding:1rem 0 0 0;
        
        color:var(--color-greyLetters);
        align-self:center;
}
    
& .formRegister > p{
        font-size:10px;
        font-weight:400;
        line-height:18px;
       
        color:var(--color-grey1);
        align-self:center;
    
        padding:0.5rem 0;
}


@media (min-width:426px){

    & .sectionLogoRegister {
        width:340px;
    }

    & .formRegister {
        width:340px;
    }
}

@media (min-width:800px){
    & .sectionLogoRegister {
        width:340px;
    }

    & .formRegister {
        width:340px;
       height:80%;
    }
}

`