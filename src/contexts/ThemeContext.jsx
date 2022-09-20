import React, {useState, createContext} from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    
    const {theme, setTheme} = useTheme();

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}