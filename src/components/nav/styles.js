import styled from "styled-components";

export const StyledNav = styled.nav`
position:fixed;

height:73px;
width:100%;

border-bottom:1px solid var(--color-grey3);

& .divNav{
    width: 95%;
    height: 73px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (min-width:750px){
    height:72px;

    & .divNav{
        width:70%;
        height:72px;
    }
}
`;