import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Footer = styled.footer`
    height: 3.75rem;
    width: 100%;
    background-color: ${colors.primary};
    display: flex;
    justify-content: start;
    align-items: center;
    img{
        height: 3.125rem;
        width: 5.125rem;
        padding-left: 2rem;
        padding-top: 0.3rem;
    } 
`
