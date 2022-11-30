import styled from "styled-components";

export const StyledSection = styled.section`
background-color:var(--color-black);

width:100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:2rem;

& img {
    background-color:var(--color-black);

    width:300px;
    height:250px;
}

& h1 {
font-size:28px;
font-weight:700;
line-height:21px;

color:#da4381;
}

& button {
    height:48px;
    width:60%;

    border-radius:50px;
    cursor:pointer;

    background-color:#da4381;
    color:var(--color-white);

    font-size:18px;
    font-weight:500;
    line-height:21px;
}

@media (min-width:800px){
    & img {
        width:400px;
        height:350px;
    }

    & button {
        width:300px;
    }
}
`;