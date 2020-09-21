import React from 'react';
import '../styles/Header.scss';
import ThemeIcon from './ThemeIcon.jsx';

export default function Header() {
	return (
		<header className='header'>

			<strong className='header__title'>Where in the world?</strong>

			<button className='header__dark-mode-toggler' aria-label='dark-mode'>
				<ThemeIcon className='header__dark-mode-toggler__icon' />
				<b className='header__dark-mode-toggler__text'>
					Dark Mode
				</b>
			</button>

		</header>
	)
}
