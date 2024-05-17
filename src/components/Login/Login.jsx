import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "../../globalStyle.styled";
import * as S from "./login.styled";
import { paths } from "../../paths";
import { useState } from "react";
// import { setToken } from "../../api/cardsApi";
import { Signin } from "../../api/auth";
import { Err } from "../Register/register.styled";

export function Login({ setIsAuth }) {

    let navigate = useNavigate();

    const [errMessage, setErrMessage] = useState('');

    const [inputValue, setInputValue] = useState({
        login: '',
        password: ''
    });

    const onChangedInput = (e) => {
        const {value, name} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        const {login, password} = inputValue;

        if (!login || !password) {
            return setErrMessage("Заполните все поля!");
        }

        try {
            await Signin(inputValue).then((responseData) => {
                setErrMessage('');
                //  setToken(responseData.user.token);
                setIsAuth(responseData.user);
                localStorage.setItem('user', JSON.stringify(responseData.user));
                navigate(paths.HOME);
            })
        } catch (error) {
            setErrMessage("Логин или пароль введен не верно!");
        }
    };

    return (
        <Wrapper>
            <S.ContainerSignin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Вход</h2>
                        </S.ModalTtl>
                        <S.ModalFormLogin id="formLogIn" onSubmit={handleSubmitLogin} action="#">
                            <S.ModalInput onChange={onChangedInput} type="text" value={inputValue.login} name="login" id="formlogin" placeholder="Эл. почта" />
                            <S.ModalInput onChange={onChangedInput} type="password" value={inputValue.password} name="password" id="formpassword" placeholder="Пароль" />
                            <Err>{errMessage}</Err>
                            <S.ModalBtnEnter type="submit" id="btnEnter">Войти</S.ModalBtnEnter>
                            <S.ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerSignin>
        </Wrapper>
    )
}