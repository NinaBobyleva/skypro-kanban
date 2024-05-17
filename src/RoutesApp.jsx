import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyle.styled';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { paths } from './paths';
import { CardPage } from './pages/CardPage/CardPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ExitPage } from './pages/ExitPage/ExitPage'
import { useState } from 'react';

function getLocalStorage() {
    let user = '';
    try {
        user = JSON.parse(localStorage.getItem('user'));
        return user;
    } catch (error) {
        return '';
    }
}

export function RoutesApp() {
    const [isAuth, setIsAuth] = useState(getLocalStorage());
    
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route element={<PrivateRoute isAuth={isAuth} />}>
                    <Route path={paths.HOME} element={<HomePage isAuth={isAuth} />}>
                        <Route path={paths.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
                        <Route path={paths.CARD_ID} element={<CardPage />} />
                    </Route>
                </Route>

                <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth} />} />
                <Route path={paths.REGISTER} element={<RegisterPage setIsAuth={setIsAuth} />} />
                <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
        </>
    )
}