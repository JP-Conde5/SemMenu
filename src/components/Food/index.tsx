import * as S from "./style"

export interface IFood{
  // ilustration: string
  // mensage: string
   name: string
}

export const Food = ({ name } : IFood) => {
   return(
      <S.Aside>
         <h3>{name}</h3>
      </S.Aside>
   )
}