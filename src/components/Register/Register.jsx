import { Wrapper } from "../../globalStyle.styled";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import * as S from "../Login/login.styled";
import { ModalBtnSignupEnt } from "./register.styled";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { setToken } from "../../api";
import { Signup } from "../../api";

export function Register({ setIsAuth }) {
    let navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            await Signup({
                name: name,
                login: login,
                password: password,
            }).then((responseData) => {
                console.log(responseData);
                setToken(responseData.user.token);
                setIsAuth(true);
                navigate(paths.HOME);
            })
        } catch (error) {
            alert("Пользователь уже сущуствует!");
        }
    };
    return (
        <Wrapper>
            <S.ContainerSignin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Регистрация</h2>
                        </S.ModalTtl>
                        <S.ModalFormLogin id="formLogUp" onSubmit={handleSubmitRegister} action="#">
                            <S.ModalInput className="first-name" value={name} onChange={(e) => setName(e.target.value)} type="text" name="first-name" id="first-name" placeholder="Имя" />
                            <S.ModalInput className="login" value={login} onChange={(e) => setLogin(e.target.value)} type="text" name="login" id="loginReg" placeholder="Эл. почта" />
                            <S.ModalInput className="password-first" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                            <ModalBtnSignupEnt id="SignUpEnter">Зарегистрироваться</ModalBtnSignupEnt>
                            <S.ModalFormGroup>
                                <p>Уже есть аккаунт?  <Link to={paths.LOGIN}>Войдите здесь</Link></p>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerSignin>
        </Wrapper>
    )
}