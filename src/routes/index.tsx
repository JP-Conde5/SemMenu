import { Routes, Route } from "react-router-dom"
import { PageHome, PageRevenues, PageLayout, PageCadastrar, PageLogin, PageKitchen } from "../pages/index.ts"
import { ProtectedRoute } from "./ProtectedRoutes.tsx"

export function Rout(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<PageHome/>}/>
                <Route path="revenues" element={<PageRevenues/>} />
                <Route path="cadastrar" element={<PageCasatrar/>} />
                <Route path="login" element={<PageLogin/>} />
                <Route element={<ProtectedRoute/>}>
                    <Route path="/kitchen" element={<PageKitchen/>} />
                </Route>
            </Route>
        </Routes>
    )    
}