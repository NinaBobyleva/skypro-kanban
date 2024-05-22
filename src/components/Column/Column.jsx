import Card from "../Card/Card";
import * as S from "./column.styled";

function Column({ nameColumn, tasks }) {
    return  <S.MainColumn>
    <S.ColumnTitle>
        {nameColumn}
    </S.ColumnTitle>
    <S.Cards>
        {tasks.map((task) => (
            <Card key={task._id} task={task} />
        ))}
    </S.Cards>
</S.MainColumn>
}

export default Column;