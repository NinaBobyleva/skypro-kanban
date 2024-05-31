import { createContext, useState } from "react";

export const DateContext = createContext(null);

export const DateProvider = ({children}) => {
    const [dateCalendar, setDateCalendar] = useState(new Date());

    return <DateContext.Provider value={{dateCalendar, setDateCalendar}}>{children}</DateContext.Provider>
}



// const easymode = true;
// const playerLost = openCardsWithoutPair.length >= 2;
// // const playerLost = openCardsWithoutPair.length >= 6;

// // "Игрок проиграл", т.к на поле есть две открытые карты без пары
// if (playerLost && !easymode) {
//     finishGame(STATUS_LOST);
//     return;
// }

// // ... игра продолжается
// if (playerLost && easymode) {
//     setLives(lives - 1);
//     nextCards.map(card => {
//     if (openCardsWithoutPair.some(opencard => opencard.id === card.id)) {
//         if (card.open) {
//         setTimeout(() => {
//             setCards(prev => {
//             return prev.map(el => (el.id === card.id ? { ...el, open: false } : el));
//             });
//         }, 1000);
//         }
//     }
//     });
//     if (lives === 1) {
//     finishGame(STATUS_LOST);
//     return;
//     }
// }



