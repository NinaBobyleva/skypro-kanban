import Card from "../Card/Card";
import * as S from "./column.styled";

function Column({ nameColumn, cards }) {
    return  <S.MainColumn>
    <S.ColumnTitle>
        {nameColumn}
    </S.ColumnTitle>
    <S.Cards>
        {cards.map(card => (
            <Card theme={card.topic} date={card.date} key={card.id} title={card.title} />
        ))}
    </S.Cards>
</S.MainColumn>
}

export default Column;