import { Container } from "../../globalStyle.styled";
import Column from "../Column/Column";
import * as S from "./main.styled";

const statusList = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
]

function Main({ tasks, isLoading, isLoadingError }) {
    
    return <S.Main>
        <Container>
            <S.MainBlock>
            {isLoadingError ? <p>{isLoadingError}</p> : isLoading ? "Данные загружаются..." : <S.MainContent>
                {statusList.map((status) => (
                    <Column 
                        key={status}
                        nameColumn={status}
                        tasks={tasks.filter((el) => el.status === status)} 
                    />
                ))}
                </S.MainContent> }
            
            </S.MainBlock>
        </Container>
    </S.Main>;
}

export default Main;