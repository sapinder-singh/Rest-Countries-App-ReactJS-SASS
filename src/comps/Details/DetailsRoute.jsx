import React from 'react';
import '../../styles/DetailsRoute.scss';

import {Link} from 'react-router-dom';
import CountryDetails from './CountryDetails.jsx';
import { CountriesDataContext } from '../../contexts/CountriesDataContext.jsx';


export default function DetailsRoute({ match }) {

	const {countriesData} = React.useContext(CountriesDataContext);

	function extractClickedCountry() {
		const extracted = countriesData.filter(country =>
			country.name === match.params.countryName
		)
		return extracted;
	}

	const country = extractClickedCountry();

	const [borderCountries, setBorderCountries] = React.useState([]);
	
	
	

	React.useEffect(() => {
		async function resolveBorders() {
			const promises = country[0].borders.map(fetchNeighborName);

			setBorderCountries(await Promise.all(promises));
		}

		// Extract 'alphaCode' for each bordered country and fetch its real name * /
		async function fetchNeighborName(alphaCode) {
			return fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}?fields=name`)
				.then(response => response.json())
				.then(data => data.name);
		}

		resolveBorders();
		
	}, [borderCountries]);
	


	return (
		<main className='details-route'>
			<Link to='/'>
				<button type='button' className='details-route__back-to-home'>
					&larr; Back
				</button>
			</Link>

			{	
				/* to trigger re-render when fetching borders is done, set condition */
					borderCountries!==[] &&
					country.map(data =>
						CountryDetails(data, borderCountries)
					)
			}

		</main>
	)
}