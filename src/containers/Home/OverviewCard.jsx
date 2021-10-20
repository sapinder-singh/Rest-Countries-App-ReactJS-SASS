import React from 'react';
import { Link } from 'react-router-dom';

export default function OverviewCard(props) {
	const dataFieldKeys = ['Population', 'Region', 'Capital'];
	const dataFieldValues = [props.population, props.region, props.capital];

	const dataFieldKey = index => dataFieldKeys[index];

	return (
		<Link to={'/detail/' + props.alpha3Code} className='overview-card' key={ props.alpha3Code }>

			<img src={ props.flag } className='overview-card__flag' alt='flag' />

			<div className='overview-card__details'>

				<h1 className='overview-card__country-name'>
					{ props.name }
				</h1>
				
				{		
					dataFieldValues.map((value, index) => 
						<dl className='overview-card__data-field' key={ index }>
							
							<dt className='overview-card__data-key'>
								{ dataFieldKey(index) }:
							</dt>

							<dd className='overview-card__data-value'>
								{ value }
							</dd>
						</dl>
					)
				}
			</div>

		</Link>
	)
}