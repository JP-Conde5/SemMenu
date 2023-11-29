import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1{
    font-size: 4rem;
    color: ${colors.primary};
    padding-bottom: 2rem;
  }
  ul{
    list-style: none;
    font-size: 2rem;
    li{
      margin-bottom: 1rem;
      background-color: ${colors.primary};
      border: 1rem solid ${colors.primary};
      color: ${colors.secondary};
    }
    li:hover{
      background-color: ${colors.secondary};
      border-color: ${colors.secondary};
      color: ${colors.white};
      cursor: pointer;
    }
  }
`