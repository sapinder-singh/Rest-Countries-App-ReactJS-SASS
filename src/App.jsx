import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.scss';

import Header from './containers/Header/Header.jsx';
import HomeRoute from './containers/Home/HomeRoute.jsx';
import DetailsRoute from './containers/Details/DetailsRoute.jsx';
import {CountriesDataProvider} from './contexts/CountriesDataContext.jsx';


export default function App() {
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