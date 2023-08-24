import styled from "styled-components"
import { colors } from "../../style/GlobalStyle.ts"

export const Home = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 50%;
        display: flex;
        justify-content: center;
        padding-top: 8rem;
        img{
            width: 28.75rem;
            height: 30.625rem;
        }
        article{
            width: 80%;
            font-size: 2.25rem;
            h1{
                text-align: center;
                color: ${colors.primary};
            }
            p{
                text-align: justify;
                color: ${colors.white}
            }
        }
    }
    @media(max-width: 1200px){
        p{
            padding-bottom: 2rem;
        }    
    }
    @media(max-width: 1010px){
        flex-direction: column-reverse;
        div{
            width: 100%;
            img{
                width: calc(0.9*28.75rem);
                height: calc(0.9*30.625rem + 4rem);
                padding-bottom: 4rem;
            }
        }    
    }
    @media(max-width: 425px){
        div{
            article{
                font-size: 2rem;
            }
            img{
                width: calc(0.6*28.75rem);
                height: calc(0.6*30.625rem + 4rem);
            }
        }    
    }
`