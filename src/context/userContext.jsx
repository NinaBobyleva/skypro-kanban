import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../paths";

export const UserContext = createContext(null);

function getLocalStorage() {
    try {
        return JSON.parse(localStorage.getItem('user'));
    } catch (error) {
        return null;
    }
}

export function UserProvider({ children }) {
    const navigate = useNavigate();

    const [user, setUser] = useState(getLocalStorage());

    const loginUser = (responseData) => {
        setUser(responseData.user);
        localStorage.setItem('user', JSON.stringify(responseData.user));
        navigate(paths.HOME);
    }

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return <UserContext.Provider value={{user, loginUser, logoutUser}}>{children}</UserContext.Provider>;
}

