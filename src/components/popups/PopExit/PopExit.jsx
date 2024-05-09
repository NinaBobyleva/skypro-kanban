import { useNavigate } from "react-router-dom";
import { paths } from "../../../paths";
import * as S from "./popExit.styled";

function PopExit({ setIsAuth}) {
    let navigate = useNavigate();
    const logOut = () => {
        setIsAuth(false);
        navigate(paths.LOGIN);
    }
    return <S.PopExit id="popExit">
    <S.PopExitContainer>
        <S.PopExitBlock>
            <div>
                <S.PopExitTtlH2>Выйти из аккаунта?</S.PopExitTtlH2>
            </div>
            <form id="formExit" action="#">
                <S.PopExitFormGroup>
                    <S.PopExitExitYes onClick={logOut} id="exitYes"><S.PopExitExitYesLink>Да, выйти</S.PopExitExitYesLink> </S.PopExitExitYes>
                    <S.PopExitExitNo id="exitNo"><S.PopExitExitNoLink to={paths.HOME}>Нет, остаться</S.PopExitExitNoLink> </S.PopExitExitNo>
                </S.PopExitFormGroup>
            </form>
        </S.PopExitBlock>
    </S.PopExitContainer>
</S.PopExit>;
}

export default PopExit;