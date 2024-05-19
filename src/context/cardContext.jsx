import { createContext, useState } from "react";

export const CardsContext = createContext(null);

export const CardsProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    return <CardsContext.Provider value={{ tasks, setTasks }}>{children}</CardsContext.Provider>;
}