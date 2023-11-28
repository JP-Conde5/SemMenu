import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./style/GlobalStyle"
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/authContext";
import { RouteSoftware } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <AuthProvider>
        <RouteSoftware />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App