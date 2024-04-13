import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PopNewCard from './components/popups/Pop-New-Card/PopNewCard'
import PopBrowse from './components/popups/Pop-Browse/PopBrowse'
import Main from './components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

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

			<PopNewCard/>

			<PopBrowse/>
		
		{/* <!-- pop-up end--> */}

		<header className="header">
			<div className="container">
				<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="public/logo.png" alt="logo"/></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="public/logo_dark.png" alt="logo"/></a>
					</div>
					<nav className="header__nav">
						<button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
						<a href="#user-set-target" className="header__user _hover02">Ivan Ivanov</a>
						<div className="header__pop-user-set pop-user-set" id="user-set-target">
							{/* <a href="">x</a> */}
							<p className="pop-user-set__name">Ivan Ivanov</p>
							<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
							<div className="pop-user-set__theme">
								<p>Темная тема</p>
								<input type="checkbox" className="checkbox" name="checkbox"/>
							</div>
							<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
						</div>
					</nav>					
				</div>
			</div>			
		</header>
		<Main />
		
    </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App
