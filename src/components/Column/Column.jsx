import Card from "../Card/Card";

function Column({ nameColumn, cards }) {
    return  <div className="main__column column">
    <div className="column__title">
        {nameColumn}
    </div>
    <div className="cards">
        {cards.map(card => (
            <Card theme={card.topic} date={card.date} key={card.id} title={card.title} />
        ))}
    </div>
</div>
}

export default Column;