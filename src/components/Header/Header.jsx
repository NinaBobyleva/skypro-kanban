import { Container } from "../../globalStyle.styled";
import { useState } from "react";
import * as S from "./header.styled";
import PopUser from "../popups/PopUser/PopUser";

function Header({ isAuth, addCard }) {
    const [isOpenModalUser, setIsOpenModalUser] = useState(false);

    function userClick(e) {
        e.preventDefault();
        setIsOpenModalUser(prev => !prev);
    }

    return <S.Header>
    <Container>
        <S.HeaderBlock>
            <S.HeaderLogo className="_show _light">
                <a href="" target="_self"><img src="logo.png" alt="logo"/></a>
            </S.HeaderLogo>
            <S.HeaderLogo className="_dark">
                <a href="" target="_self"><img src="logo_dark.png" alt="logo"/></a>
            </S.HeaderLogo>
            <S.HeaderNav>
                <S.HeaderBtnMainNew id="btnMainNew"><S.HeaderBtnMainNewA href="#popNewCard" onClick={addCard}>Создать новую задачу</S.HeaderBtnMainNewA></S.HeaderBtnMainNew>
                <S.HeaderUser href="#user-set-target" onClick={userClick}>{isAuth.name}</S.HeaderUser>
                {isOpenModalUser && <PopUser isAuth={isAuth} />}
            </S.HeaderNav>					
        </S.HeaderBlock>
    </Container>			
</S.Header>;
}

export default Header;