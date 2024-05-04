import Card from "../Card/Card";
import * as S from "./column.styled";

function Column({ nameColumn, cards }) {
    return  <S.MainColumn>
    <S.ColumnTitle>
        {nameColumn}
    </S.ColumnTitle>
    <S.Cards>
        {cards.map(card => (
            <Card key={card.id} card={card} />
        ))}
    </S.Cards>
</S.MainColumn>
}

export default Column;