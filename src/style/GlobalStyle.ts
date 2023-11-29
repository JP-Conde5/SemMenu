import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0rem;
        padding: 0rem;
        outline: 0rem;
        border: 0rem;
        box-sizing: border-box;
        font-family: "Galada";
    }
    body{
        background-color: #E3DCC0;
    }
` 

export const colors = {
    primary: "#FFA8D2",
    secondary: "#FFF2A0",
    tertiary: "#E3DCC0",
    white: "#FFFF", 
    black: "#0000",
}