import * as S from "../../components/Main/main.styled";
import { Wrapper } from "../../globalStyle.styled";

export function Login() {
    return <Wrapper>
        <S.ContainerSignin>
            <S.Modal>
                <S.MainBlock>
                    <div className="modal__ttl">
                        <h2>Вход</h2>
                    </div>
                    <form className="modal__form-login" id="formLogIn" action="#">
                        <input className="modal__input" type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                        <input className="modal__input" type="password" name="password" id="formpassword" placeholder="Пароль" />
                        <button className="modal__btn-enter _hover01" id="btnEnter"><a href="../main.html">Войти</a></button>
                        <div classNameName="modal__form-group">
                            <p>Нужно зарегистрироваться?</p>
                            <a href="signup.html">Регистрируйтесь здесь</a>
                        </div>
                    </form>
                </S.MainBlock>
            </S.Modal>
        </S.ContainerSignin>
    </Wrapper>
};