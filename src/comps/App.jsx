import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.scss';

import Header from './Header.jsx';
import HomeRoute from './Home/HomeRoute.jsx';
import DetailsRoute from './Details/DetailsRoute.jsx';
import {CountriesDataProvider} from '../contexts/CountriesDataContext.jsx';


export default function App() {
	React.useEffect(() => {
		document.querySelector('.header .header__dark-mode-toggler')
			.onclick = () => {
				document.querySelector('#root')
					.classList.toggle('dark');
			}
	})
	return (
		<>
			<Header/>

			<Router>
				<Switch>
					<CountriesDataProvider>

						<Route path='/' exact component={HomeRoute} />
						<Route path='/detail/:countryName' component={DetailsRoute} />
						
					</CountriesDataProvider>
				</Switch>
			</Router>
		</>
	)
}