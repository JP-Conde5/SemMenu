import { Routes, Route } from "react-router-dom"
import { PageHome, PageRevenues, PageLayout, PageRegister, PageLogin, PageKitchen } from "../pages/index.ts"
import { ProtectedRoute } from "./ProtectedRoutes.tsx"

export function Rout(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<PageHome/>}/>
                <Route path="revenues" element={<PageRevenues/>} />
                <Route path="login" element={<PageLogin/>}/>
                <Route path="register" element={<PageRegister/>} />
                <Route path="kitchen" element={<ProtectedRoute/>}>
                    <Route path="" element={<PageKitchen/>}/> 
                </Route>
            </Route>
        </Routes>
    )    
}