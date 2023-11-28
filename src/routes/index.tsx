import { Routes, Route } from "react-router-dom"
import { PageHome, PageRevenues, PageLayout, PageRegister, PageLogin, PageKitchen } from "../pages/index.ts"
import { ProtectedRoute } from "./ProtectedRoutes.tsx"

export const RouteSoftware = () =>{
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<PageHome/>}/>
                <Route path="revenues" element={<PageRevenues/>} />
                <Route path="login" element={<PageLogin/>}/>
                <Route path="register" element={<PageRegister/>} />
                <Route element={<ProtectedRoute/>}>
                    <Route path="kitchen" element={<PageKitchen/>}/> 
                </Route>
            </Route>
        </Routes>
    )    
}