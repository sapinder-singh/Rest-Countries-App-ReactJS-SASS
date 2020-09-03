import React from 'react';
import { Link } from 'react-router-dom';

export default function OverviewCard(props) {
	return (
		<Link to={'/detail/' + props.name} key={ props.name }
					className='overview-card'>

			<img src={ props.flag } className="overview-card__flag" alt="country-flag" />

			<div className='overview-card__text-content'>

				<h1 className='overview-card__text-content__country-name'>
					{ props.name }
				</h1>
				
				{		
					[props.population,	props.region,	props.capital]
						.map(MapDataField)
				}
			</div>

		</Link>
	)
}


function MapDataField(dataValue, index) {
	return (
		<dl className='overview-card__text-content__data-field' key={ index }>
			<dt className="data-field__key">
				{ dataFieldKey(index) }:
			</dt>

			<dd className="data-field__value">
				{ dataValue }
			</dd>
		</dl>
	)
}

function dataFieldKey(index) {
	const dataFieldKeys = [
		'Population',
		'Region',
		'Capital'
	]

	return dataFieldKeys[index];
}