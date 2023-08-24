import * as S from "./style"

export interface IFood{
   ilustration: string
   mensage: string
   name: string
}

export const Food = ({ ilustration, mensage, name } : IFood) => {
   return(
      <S.Aside>
         <img src={ilustration} alt={mensage} />
         <br />
         <h3>{name}</h3>
      </S.Aside>
   )
}