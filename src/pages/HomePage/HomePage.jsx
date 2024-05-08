import { useEffect, useState } from 'react'
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
// import { cardList } from '../../data';
import { Wrapper } from '../../globalStyle.styled';
import PopNewCard from '../../components/popups/PopNewCard/PopNewCard';
import { Outlet } from 'react-router-dom';
import { getTasks } from '../../api';


export function HomePage() {
    // const [cards, setCards] = useState(cardList);
	// const [isLoading, setIsLoading] = useState(false);
	const [tasks, setTasks] = useState([
		{
			_id: "659ad0aad0e154bebca2b6b3",
			userId: "659abd3ad0e154bebca2b6b7",
			title: "Новая задача 1!",
			topic: "Research",
			date: "2024-01-07T16:26:18.179Z",
			description: "Подробное описание задачи",
			status: "Без статуса"
		}
	]);

	useEffect(() => {
        getTasks().then((tasks) => {
            setTasks(tasks.tasks);
        });
    }, []);

	// function addCard(e) {
	// 	e.preventDefault();
	// 	const newCard = {
	// 		id: cards[cards.length - 1]. id + 1,
	// 		topic: 'Web Design',
	// 		title: 'Название задачи!',
	// 		date: '30.10.23',
	// 		status: 'Без статуса',
	// 	};
	// 	setCards([...cards, newCard])
	// }

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 0)
	// }, [])
	
	return (
		<Wrapper>
			<PopNewCard />
			<Header/>
			<Main tasks={tasks} />
			<Outlet />
		</Wrapper>
	);
}