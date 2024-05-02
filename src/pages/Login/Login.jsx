import { Link } from "react-router-dom";
import { Wrapper } from "../../globalStyle.styled";
import * as S from "./login.styled";
import { useNavigate } from 'react-router-dom';

export function Login() {
    let navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
        navigate('/main.html');
	}
    return (
    <Wrapper>
        <S.ContainerSignin>
            <S.Modal>
                <S.ModalBlock>
                    <S.ModalTtl>
                        <h2>Вход</h2>
                    </S.ModalTtl>
                    <S.ModalFormLogin onSubmit={handleSubmit} id="formLogIn" action="#">
                        <S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                        <S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль" />
                        <S.ModalBtnEnter type="submit" id="btnEnter"><Link to="../main.html">Войти</Link></S.ModalBtnEnter>
                        <S.ModalFormGroup>
                            <p>Нужно зарегистрироваться?</p>
                            <Link to="/signup.html">Регистрируйтесь здесь</Link>
                        </S.ModalFormGroup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.Modal>
        </S.ContainerSignin>
    </Wrapper>
    );
};

{/* <a href="../main.html">Войти</a> */}