import { paths } from "../../../paths";
import * as S from "./popUser.styled";

function PopUser({ isAuth }) {
    return <S.HeaderPopUserSet id="user-set-target">
    <S.PopUserSet>
    <S.PopUserSetName>{isAuth.name}</S.PopUserSetName>
    <S.PopUserSetMail>{isAuth.login}</S.PopUserSetMail>
    <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput type="checkbox" className="checkbox" name="checkbox"/>
    </S.PopUserSetTheme>
    <S.Button type="button"><S.LinkBtn to={paths.EXIT}>Выйти</S.LinkBtn></S.Button>
    </S.PopUserSet>
</S.HeaderPopUserSet>;
}

export default PopUser;