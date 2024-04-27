import * as S from "./popExit.styled";

function PopExit() {
    return <S.PopExit id="popExit">
    <S.PopExitContainer>
        <S.PopExitBlock>
            <S.PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
            </S.PopExitTtl>
            <form className="pop-exit__form" id="formExit" action="#">
                <S.PopExitFormGroup>
                    <S.PopExitExitYes id="exitYes"><a href="modal/signin.html">Да, выйти</a> </S.PopExitExitYes>
                    <S.PopExitExitNo id="exitNo"><a href="main.html">Нет, остаться</a> </S.PopExitExitNo>
                </S.PopExitFormGroup>
            </form>
        </S.PopExitBlock>
    </S.PopExitContainer>
</S.PopExit>;
}

export default PopExit;