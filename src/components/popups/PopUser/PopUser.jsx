import { paths } from "../../../paths";
import * as S from "./popUser.styled";

function PopUser() {
    return <S.HeaderPopUserSet id="user-set-target">
    <S.PopUserSet>
    <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
    <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
    <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput type="checkbox" className="checkbox" name="checkbox"/>
    </S.PopUserSetTheme>
    <S.Button type="button"><S.LinkBtn to={paths.EXIT}>Выйти</S.LinkBtn></S.Button>
    </S.PopUserSet>
</S.HeaderPopUserSet>;
}

export default PopUser;