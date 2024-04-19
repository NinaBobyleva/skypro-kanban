import Column from "../Column/Column";

function Main() {
    return <main className="main">
    <div className="container">
        
        <div className="main__block">
            <div className="main__content">
               <Column nameColumn={<p>Без статуса</p>}	/>					
               <Column nameColumn={<p>Нужно сделать</p>}	/>					
               <Column nameColumn={<p>В работе</p>}	/>					
               <Column nameColumn={<p>Тестирование</p>}	/>					
               <Column nameColumn={<p>Готово</p>}	/>					
            </div>
        
        </div>
    </div>
</main>;
}

export default Main;