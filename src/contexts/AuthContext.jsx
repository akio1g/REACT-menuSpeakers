import React, { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider ({children, initialLogin}) {
    const [login, setLogin] = useState('Akio');

    return (
        <AuthContext.Provider value={{login, setLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider};