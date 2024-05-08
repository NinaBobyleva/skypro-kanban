import { Wrapper } from "../../globalStyle.styled";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import * as S from "../Login/login.styled";

export function Register() {
    return (
        <Wrapper>
            <S.ContainerSignin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Регистрация</h2>
                        </S.ModalTtl>
                        <S.ModalFormLogin id="formLogUp" action="#">
                            <S.ModalInput className="first-name" type="text" name="first-name" id="first-name" placeholder="Имя" />
                            <S.ModalInput className="login" type="text" name="login" id="loginReg" placeholder="Эл. почта" />
                            <S.ModalInput className="password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                            <S.ModalBtnEnter id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </S.ModalBtnEnter>
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