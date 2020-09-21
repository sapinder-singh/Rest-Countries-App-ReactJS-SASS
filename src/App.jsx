import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.scss';

import Header from './comps/Header.jsx';
import HomeRoute from './routes/Home/HomeRoute.jsx';
import DetailsRoute from './routes/Details/DetailsRoute.jsx';
import {CountriesDataProvider} from './contexts/CountriesDataContext.jsx';


export default function App() {
	React.useEffect(() => {
		document.querySelector('.header__dark-mode-toggler')
			.onclick = () => {
				document.querySelector('#root')
					.classList.toggle('dark');
			}
	})
	return (
		<>
			<Header/>
			
			<Switch>
				<CountriesDataProvider>

					<Route path='/' exact component={HomeRoute} />
					<Route path='/detail/:countryCode' exact component={DetailsRoute} />	

				</CountriesDataProvider>
			</Switch>
		</>
	)
}