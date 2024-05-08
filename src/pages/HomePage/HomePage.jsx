import { useEffect, useState } from 'react'
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import { cardList } from '../../data';
import { Wrapper } from '../../globalStyle.styled';
import PopNewCard from '../../components/popups/PopNewCard/PopNewCard';
import { Outlet } from 'react-router-dom';

export function HomePage() {
    const [cards, setCards] = useState(cardList);
	const [isLoading, setIsLoading] = useState(false);

	function addCard(e) {
		e.preventDefault();
		const newCard = {
			id: cards[cards.length - 1]. id + 1,
			topic: 'Web Design',
			title: 'Название задачи!',
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
			<PopNewCard />
			<Header addCard={addCard}/>
			<Main cards={cards} isLoading={isLoading}/>
			<Outlet />
		</Wrapper>
	);
}