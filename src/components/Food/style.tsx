import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Aside = styled.aside`
    background-color: ${colors.secondary};
    border: 1rem solid ${colors.secondary};
    border-radius: 1.375rem;
    width: 32.063rem;
    height: 21.313rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    img{
        width: 13.375rem;
        height: 13.375rem;
    }
    h3{
       font-size: 2.25rem;
       color: ${colors.primary}; 
    }
    @media(max-width: 1024px){
        width: calc(0.7*32.063rem);
    }
`