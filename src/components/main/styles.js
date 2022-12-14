import styled from "styled-components";

export const StyledMain = styled.main`
width:100%;

position:relative;
top:73px;

& .divMain {
    margin: 0 auto;
    width: 95%;
    height:100%;

    display: flex;
    flex-direction: column;
    align-items: center;
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
    max-height: 360px;
    overflow-y: auto;
    padding:0.8rem 0;
    margin-bottom:10px;

    background-color:var(--color-grey3);
    border:none;
    border-radius:4px;

    display:flex;
    flex-direction:column;
    gap:10px;


}

& .sectionList > ul > h2 {
    color: var(--color-greyLetters);
    font-size:16px;
    font-weight:600;

    padding:1rem 0;

    align-self:center;
}

@media (min-width:750px){
    & .divMain {
        margin: 0 auto;
        width: 70%;
    }

    & .sectionList > ul {
    
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none var(--color-greyLetters);
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-greyLetters);
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #000000;
  border: 0px none var(--color-greyLetters);
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #0d0d0d;
}
::-webkit-scrollbar-track:active {
  background: var(--color-greyLetters);
}
::-webkit-scrollbar-corner {
  background: transparent;
}

    }
}
`