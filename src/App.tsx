import { GlobalStyle } from "./style/GlobalStyle";
import { Rout } from "./routes/index.tsx"
import { BrowserRouter } from "react-router-dom" 

export function App(){
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Rout />
        </BrowserRouter>
    )
}