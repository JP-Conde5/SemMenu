import * as S from "./style.js"
import { ComponentFood } from "../../components/index.ts"
import { foods } from "../../services/foods.ts"

export function Revenues() {
    return(
        <S.Revenues>
          {foods.map(item=> (
                <ComponentFood
                    key = {item.id}
                    name = {item.name}
                />
            ))}
        </S.Revenues>
    )
}