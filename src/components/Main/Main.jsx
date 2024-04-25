import Column from "../Column/Column";

const statusList = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
]

function Main({ cards, isLoading }) {
    
    return <main className="main">
        <div className="container">
            <div className="main__block">
            {isLoading ? "Данные загружаются..." : <div className="main__content">
                {statusList.map((status) => (
                    <Column 
                        key={status}
                        nameColumn={status}
                        cards={cards.filter((card) => card.status === status)} 
                        />
                ))}					
                </div>}
            </div>
        </div>
    </main>;
}

export default Main;