import * as S from "./popExit.styled";

function PopExit() {
    return <S.PopExit id="popExit">
    <S.PopExitContainer>
        <S.PopExitBlock>
            <S.PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
            </S.PopExitTtl>
            <S.PopExitForm id="formExit" action="#">
                <S.PopExitFormGroup>
                    <S.PopExitExitYes className="_hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </S.PopExitExitYes>
                    <S.PopExitExitNo className="_hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </S.PopExitExitNo>
                </S.PopExitFormGroup>
            </S.PopExitForm>
        </S.PopExitBlock>
    </S.PopExitContainer>
</S.PopExit>;
}

export default PopExit;