import React from 'react';
import '../../styles/DetailsRoute.scss';

import {Link} from 'react-router-dom';
import CountryDetails from './CountryDetails.jsx';
import { CountriesDataContext } from '../../contexts/CountriesDataContext.jsx';


export default function DetailsRoute({ match }) {

	const {countriesData} = React.useContext(CountriesDataContext);

	function extractClickedCountry() {
		const extracted = countriesData.filter(country =>
			country.alpha3Code === match.params.countryCode
		)
		return extracted;
	}

	const country = extractClickedCountry();

	const borderCountries = resolveBorders();
	
	function resolveBorders() {

			const borders = country[0].borders.map(alpha3Code => 
				{
					for (const item of countriesData) {
						if (item.alpha3Code === alpha3Code)
							return item;
					}
				})
				
			return borders;
		}

	


	return (
		<main className='details-route'>
			<Link to='/'>
				<button type='button' className='details-route__back-to-home'>
					&larr; Back
				</button>
			</Link>

			{	
				/* to trigger re-render when fetching borders is done, set condition */
					country.map(data =>
						CountryDetails(data, borderCountries)
					)
			}

		</main>
	)
}