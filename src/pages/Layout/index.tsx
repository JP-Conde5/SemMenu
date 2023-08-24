import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentFooter } from "../../components/index.ts"
import * as S from "./style.ts"

export function Layout(){
    return(
        <>
            <ComponentHeader />
            <S.Main>
                <Outlet />
            </S.Main>
            <ComponentFooter />
        </>
    )        
}