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

						<Link to={ '/detail/' + country } className='borders__list__country' key={ country }>
							{ country }
						</Link>
					)
				}
			</dd>
		</dl>
	)
}
