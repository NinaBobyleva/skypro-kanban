import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyle.styled';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrPage } from './pages/RegistrPage/RegistrPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { paths } from './paths';
import { CardPage } from './pages/CardPage/CardPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ExitPage } from './pages/ExitPage/ExitPage'
import { useState } from 'react';

export function RoutesApp() {
    let [isAuth, setIsAuth] = useState(false);
    console.log(isAuth);
    return (
        <>
        <GlobalStyle />
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path={paths.HOME} element={<HomePage />}>
                    <Route path={paths.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
                    <Route path={paths.CARD_ID} element={<CardPage />} />
                </Route>
            </Route>

            <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>} />
            <Route path={paths.REGISTR} element={<RegistrPage />} />
            <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
    </>
    )
};