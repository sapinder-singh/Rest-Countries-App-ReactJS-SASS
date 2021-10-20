import React from 'react';
import { Link } from 'react-router-dom';

export default function BorderCountries({ borderCountries }) {
	return (
		<dl className='detailed-country__borders'>
			<dt className='borders__heading'>
				Border Countries:
			</dt>

			<dd className='borders__list'>
				{
					borderCountries.map(country =>

						<Link to={ '/detail/' + country.alpha3Code } className='borders__list__country' key={ country.alpha3Code }>
							{ country.name }
						</Link>
					)
				}
			</dd>
		</dl>
	)
}
