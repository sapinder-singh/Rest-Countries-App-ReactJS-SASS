import React from 'react';
import '../../styles/Header.scss';
import ThemeIcon from './ThemeIcon.jsx';

export default function Header() {
	React.useEffect(() => {
		document.querySelector('.header__theme-toggler')
			.onclick = () => {
				document.querySelector('#root')
					.classList.toggle('dark');
			}
	})

	return (
		<header className='header'>

			<strong className='header__title'>Where in the world?</strong>

			<button className='header__theme-toggler' aria-label='dark-mode'>
				<ThemeIcon className='header__theme-icon' />
				<b className='header__dark-mode-text'>
					Dark Mode
				</b>
			</button>

		</header>
	)
}
