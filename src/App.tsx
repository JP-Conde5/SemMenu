import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./style/GlobalStyle"
import { Rout } from "./routes"
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/authContext";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <AuthProvider>
        <Rout />
      </AuthProvider>
    </BrowserRouter>
  )
}

