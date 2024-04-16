import Card from "../Card/Card";

function Column({ nameColumn }) {
    return  <div className="main__column column">
    <div className="column__title">
        {nameColumn}
    </div>
    <div className="cards">
        <Card nameCard = "Web Design" />
    </div>
</div>
}

export default Column;