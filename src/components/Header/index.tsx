import * as S from "./style"
import { Link, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
  
export function Header() {
    //const logo = require("../../images/icon.png")
    const { user, signOut } = useContext(AuthContext)
    const navigate = useNavigate();
    async function logout() {
        await signOut()
        navigate('/login')
    }
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
                            <a href="/revenues">Receitas</a>
                        </li>
                    </ul>
                    {
                        user ? (
                            <ul>
                                <li>
                                    <Link to="/kitchen">Cozinha</Link>
                                </li>
                                <li>
                                    <button onClick={logout}>{user.name} <GrLogout /></button>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Cadastrar</Link>
                                </li>
                            </ul>
                        )
                    }
                </nav>
            </S.Header>
        </S.Fundo>
    )
}