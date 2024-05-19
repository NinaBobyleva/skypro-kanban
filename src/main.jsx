import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/userContext.jsx';
import { CardsProvider } from './context/cardContext.jsx';
import "react-day-picker/dist/style.css";

const root = createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CardsProvider>
          <App />
        </CardsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
