import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/userContext.jsx';
import { CardsProvider } from './context/cardContext.jsx';
import "react-day-picker/dist/style.css";
import { DateProvider } from './context/dateContext.jsx';

const root = createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <DateProvider>
        <UserProvider>
          <CardsProvider>
            <App />
          </CardsProvider>
        </UserProvider>
      </DateProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
