import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { Wrapper } from "../../globalStyle.styled";
import * as S from "./login.styled";
import { paths } from "../../paths";

export function Login() {

    // let navigate = useNavigate();

    // const onLogin = () => {
    //     setIsAuth(true);
    //     navigate(paths.HOME);
    // }

    return (
        <Wrapper>
            <S.ContainerSignin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Вход</h2>
                        </S.ModalTtl>
                        <S.ModalFormLogin id="formLogIn" action="#">
                            <S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                            <S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
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