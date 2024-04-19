// import { useState } from 'react'
import './App.css'
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
    <div className="wrapper">
		{/* <!-- pop-up start--> */}
		
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

		<Header />
		<Main />
		
    </div>
    </>
  )
}

export default App
