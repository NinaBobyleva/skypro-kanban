import { createContext } from "react";
import { useState } from "react";

export const GlobalThemeContext = createContext('null');

export const GlobalThemeProvider = ({children}) => {
    const [globalTheme, setGlobalTheme] = useState(getLocalStorage());

    function getLocalStorage() {
        try {
            return JSON.parse(localStorage.getItem('globalTheme'));
        } catch (error) {
            return null;
        }
    }

    const localStorage = () => {
        localStorage.setItem('globalTheme', JSON.stringify(globalTheme));
    }

    return <GlobalThemeContext.Provider value={{globalTheme, setGlobalTheme}}>{children}</GlobalThemeContext.Provider>
}