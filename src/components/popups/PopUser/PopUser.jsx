import * as S from "./popUser.styled";

function PopUser() {
    return <S.HeaderPopUserSet id="user-set-target">
    <S.PopUserSet>
    <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
    <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
    <S.PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox"/>
    </S.PopUserSetTheme>
    <S.Button type="button"><a href="#popExit">Выйти</a></S.Button>
    </S.PopUserSet>
</S.HeaderPopUserSet>;
}

export default PopUser;