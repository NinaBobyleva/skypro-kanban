import { useContext } from "react";
import { paths } from "../../../paths";
import * as S from "./popExit.styled";
import { UserContext } from "../../../context/userContext";

function PopExit() {
    const {logoutUser} = useContext(UserContext);

    return <S.PopExit id="popExit">
    <S.PopExitContainer>
        <S.PopExitBlock>
            <div>
                <S.PopExitTtlH2>Выйти из аккаунта?</S.PopExitTtlH2>
            </div>
            <form id="formExit" action="#">
                <S.PopExitFormGroup>
                    <S.PopExitExitYes onClick={logoutUser} id="exitYes"><S.PopExitExitYesLink>Да, выйти</S.PopExitExitYesLink> </S.PopExitExitYes>
                    <S.PopExitExitNo id="exitNo"><S.PopExitExitNoLink to={paths.HOME}>Нет, остаться</S.PopExitExitNoLink> </S.PopExitExitNo>
                </S.PopExitFormGroup>
            </form>
        </S.PopExitBlock>
    </S.PopExitContainer>
</S.PopExit>;
}

export default PopExit;