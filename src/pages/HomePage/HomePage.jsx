import { useContext, useEffect, useState } from 'react'
import Main from '../../components/Main/Main';
import Header from '../../components/Header/Header';
import { Wrapper } from '../../globalStyle.styled';
import { Outlet } from 'react-router-dom';
import { getTasks } from '../../api/cardsApi';
import { UserContext } from '../../context/userContext';
import { CardsContext } from '../../context/cardContext';


export function HomePage() {
	const [isLoading, setIsLoading] = useState(false);
	const {tasks, setTasks} = useContext(CardsContext);
	const [isLoadingError, setIsLoadingError] = useState(null);
	const { user } = useContext(UserContext);

	useEffect(() => {
		setIsLoading(true);
		getTasks(user.token).then((tasks) => {
			setTasks(tasks.tasks);
			setIsLoading(false);
		}).catch(() => {
			setIsLoadingError("Не удалось загрузить данные, попробуйте позже");
			setIsLoading(false);
		})
	}, []);

	// function addCard(e) {
	// 	e.preventDefault();
	// 	const newTask = {
	// 		topic: 'Web Design',
	// 		title: 'Название задачи!',
	// 		date: '30.10.23',
	// 		status: 'Без статуса',
	// 	};
	// 	// setTasks([...tasks, newTask])
	// }

	return (
		<Wrapper>
			<Header user={user} />
			<Main tasks={tasks} isLoading={isLoading} isLoadingError={isLoadingError} />
			<Outlet />
		</Wrapper>
	);
}

