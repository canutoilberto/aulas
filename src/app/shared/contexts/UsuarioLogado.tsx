import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoProviderProps {
    children?: any
} 

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
} 

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {
    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome('Ilberto')
        }, 1000);
    });

    const handleLogout = useCallback(() => {
        console.log('Logout executado...')
    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}