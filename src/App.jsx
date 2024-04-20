import { useEffect, useState } from 'react'
import './App.css'
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { cardList } from './data';

function App() {
	const [cards, setCards] = useState(cardList);
	const [isLoading, setIsLoading] = useState(false);

	function addCard(e) {
		e.preventDefault();
		const newCard = {
			id: cards[cards.length - 1]. id + 1,
			topic: 'Web Design',
			title: 'Название задачи',
			date: '30.10.23',
			status: 'Без статуса',
		};
		setCards([...cards, newCard])
	}

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000)
	}, [])
	console.log(isLoading);
	return (
		<>
		<div className="wrapper">
				<div className="pop-exit" id="popExit">
					<div className="pop-exit__container">
						<div className="pop-exit__block">
							<div className="pop-exit__ttl">
								<h2>Выйти из аккаунта?</h2>
							</div>
							<form className="pop-exit__form" id="formExit" action="#">
								<div className="pop-exit__form-group">
									<button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
									<button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
								</div>
							</form>
						</div>
					</div>
				</div>

				<PopNewCard />

				<PopBrowse />

			<Header addCard={addCard}/>
			<Main cards={cards} isLoading={isLoading}/>
			
		</div>
		</>
	)
}

export default App
