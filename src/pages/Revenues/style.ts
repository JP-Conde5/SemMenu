import styled from "styled-components"

export const Revenues = styled.section`
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 2rem;
    @media(max-width: 730px){
        grid-template-columns: auto;
    }
`