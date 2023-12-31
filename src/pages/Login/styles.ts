import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${colors.primary};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    background-color: ${colors.primary};
    border: 0.2rem solid ${colors.secondary};
    border-radius: 1rem;
    padding: 1.5rem;
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.secondary};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.secondary};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    article {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 1rem;
      a {
        text-decoration: none;
        color: ${colors.secondary};
        font-weight: bold;
      }
      a:hover{
        color: ${colors.white};
      }
    }
    button{
        font-size: 1rem;
        margin-left: 3rem;
        background-color: ${colors.secondary};
        border: 0.5rem solid ${colors.secondary};
        border-radius: 20%;
        cursor: pointer;
      }
      button:hover{
          background-color: ${colors.white};
          border-color: ${colors.white};
      }
  }
`