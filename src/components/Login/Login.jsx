import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "../../globalStyle.styled";
import * as S from "./login.styled";
import { paths } from "../../paths";
import { useState } from "react";
import { Signin, setToken } from "../../api";

export function Login({ setIsAuth }) {

    let navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            await Signin({
                login: login,
                password: password,
            }).then((responseData) => {
                console.log(responseData.user.token);
                setToken(responseData.user.token);
                setIsAuth(true);
                navigate(paths.HOME);
            })
        } catch (error) {
            alert("Логин или пароль введен не верно!");
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
                            <S.ModalInput type="text" value={login} onChange={(e) => setLogin(e.target.value)} name="login" id="formlogin" placeholder="Эл. почта" />
                            <S.ModalInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="formpassword" placeholder="Пароль" />
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