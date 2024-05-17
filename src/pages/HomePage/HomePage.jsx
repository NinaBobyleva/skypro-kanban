import { useEffect, useState } from 'react'
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import { tasksList } from '../../data';
import { Wrapper } from '../../globalStyle.styled';
import PopNewCard from '../../components/popups/PopNewCard/PopNewCard';
import { Outlet } from 'react-router-dom';
import { getTasks } from '../../api/cardsApi';


export function HomePage({ isAuth }) {
	const [isLoading, setIsLoading] = useState(false);
	const [tasks, setTasks] = useState(tasksList);
	const [isLoadingError, setIsLoadingError] = useState(null);
	
	useEffect(() => {
		setIsLoading(true);
		getTasks(isAuth.token).then((tasks) => {
			setTasks(tasks.tasks);
			setIsLoading(false);
		}).catch(() => {
			setIsLoadingError("Не удалось загрузить данные, попробуйте позже");
			setIsLoading(false);
		})
	}, []);

	function addCard(e) {
		e.preventDefault();
		const newTask = {
			id: tasks[tasks.length - 1].id + 1,
			topic: 'Web Design',
			title: 'Название задачи!',
			date: '30.10.23',
			status: 'Без статуса',
		};
		setTasks([...tasks, newTask])
	}

	return (
		<Wrapper>
			<PopNewCard />
			<Header isAuth={isAuth} addCard={addCard} />
			<Main tasks={tasks} isLoading={isLoading} isLoadingError={isLoadingError} />
			<Outlet />
		</Wrapper>
	);
}

