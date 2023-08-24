import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Header = styled.header`
    height:100%;
    height: 5.625rem;
    width: 100%;
    background-color: ${colors.primary};
    color: ${colors.primary};
    border-bottom: 1.625rem ${colors.primary} solid;
    border-bottom-left-radius: 7%;
    border-bottom-right-radius: 7%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    div{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: start;
        h1{
            font-size: 63px;
            align-items: center;
            margin-top: 3rem;
            color: ${colors.white};
        }
        picture{
            width: 4.375rem;
            height: 4.375rem;
            margin-right: 3rem;
            margin-top: 2rem;
            margin-left: 2rem
        }
    }    
    nav{
        width: 50%;
        height: 100%;
        align-items: center;
        display: flex;
        ul{
            display: flex; 
            justify-content: space-around;
            text-align: end;
            list-style-type: none;
            width: 100%;
            height: 100%;
            li{
                width: 100%;
                height: 100%;
                display: flex;
                text-align: center;
                a{
                    margin-top: 1.5rem;
                    width: 100%;
                    text-decoration: none;
                    color: ${colors.white};
                    font-size: 2.25rem;
                }
                a:hover{
                color: ${colors.secondary};
                }
            }
        }
    }
    @media(max-width: 1100px){
        h1{
            display: none;
        }
    }
`
export const Fundo = styled.div`
    width: 100%;
    background-color: ${colors.secondary};
    border-bottom: 1.125rem ${colors.secondary} solid;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%; 
`