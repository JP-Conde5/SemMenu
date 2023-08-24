import { Routes, Route } from "react-router-dom"
import { PageHome, PageRevenues, PageLayout } from "../pages/index.ts"

export function Rout(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<PageHome/>}/>
                <Route path="revenues" element={<PageRevenues/>} />
            </Route>
        </Routes>
    )    
}