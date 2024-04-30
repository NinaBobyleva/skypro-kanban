import * as S from "./popExit.styled";

function PopExit() {
    return <S.PopExit id="popExit">
    <S.PopExitContainer>
        <S.PopExitBlock>
            <div>
                <S.PopExitTtlH2>Выйти из аккаунта?</S.PopExitTtlH2>
            </div>
            <form id="formExit" action="#">
                <S.PopExitFormGroup>
                    <S.PopExitExitYes id="exitYes"><S.PopExitExitYesA href="modal/signin.html">Да, выйти</S.PopExitExitYesA> </S.PopExitExitYes>
                    <S.PopExitExitNo id="exitNo"><S.PopExitExitNoA href="main.html">Нет, остаться</S.PopExitExitNoA> </S.PopExitExitNo>
                </S.PopExitFormGroup>
            </form>
        </S.PopExitBlock>
    </S.PopExitContainer>
</S.PopExit>;
}

export default PopExit;