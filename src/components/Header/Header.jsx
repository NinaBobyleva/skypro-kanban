import { Container } from "../../globalStyle.styled";
import { useState } from "react";
import * as S from "./header.styled";
import PopUser from "../popups/PopUser/PopUser";

function Header({ addCard }) {
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
                <S.HeaderBtnMainNew id="btnMainNew"><a href="#popNewCard" onClick={addCard}>Создать новую задачу</a></S.HeaderBtnMainNew>
                <S.HeaderUser href="#user-set-target" onClick={userClick}>Ivan Ivanov</S.HeaderUser>
                {isOpenModalUser && <PopUser />}
            </S.HeaderNav>					
        </S.HeaderBlock>
    </Container>			
</S.Header>;
}

export default Header;