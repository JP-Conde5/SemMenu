import * as S from "./style"

export function Header() {
    //const logo = require("../../images/icon.png")
    return (
        <S.Fundo>
            <S.Header> 
                <div>
                    <picture>
                         <img src="src/images/icon.png" alt="Logo" />
                    </picture>
                    <h1>Doces da Rose</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/register">Cadastro</a>
                        </li>
                        <li>
                            <a href="/revenues">Receitas</a>
                        </li>
                    </ul>
                </nav>
            </S.Header>
        </S.Fundo>
    )
}