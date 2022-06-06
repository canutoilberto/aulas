import { Link } from "react-router-dom";

import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {

    const {nomeDoUsuario, logout} = useUsuarioLogado();

    return(
        <div>
            <p>Dashboard</p>
            <p>Olá, {nomeDoUsuario}</p>

            <button onClick={ logout }>Logout</button>
            <Link to="/entrar">Login</Link>
        </div>
    );
}