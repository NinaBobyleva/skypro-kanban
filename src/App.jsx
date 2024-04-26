import { useEffect, useState } from 'react'
import './App.css'
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { cardList } from './data';
import PopExit from './components/popups/PopExit/PopExit';
import { GlobalStyle, Wrapper } from './globalStyle.styled';

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
		}, 0)
	}, [])
	
	return (
		<Wrapper>
			<GlobalStyle/>
			<PopExit />
			<PopNewCard />
			<PopBrowse />
			<Header addCard={addCard}/>
			<Main cards={cards} isLoading={isLoading}/>
		</Wrapper>
	)
}

export default App