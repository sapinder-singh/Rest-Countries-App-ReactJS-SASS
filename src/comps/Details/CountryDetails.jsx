import React from 'react';
import BorderCountries from './BorderCountries.jsx';

export default function CountryDetails(country, borders) {

	return (
		<article className='detailed-country' key={ country.name }>

				<img src={ country.flag } className='detailed-country__flag' alt='img-flag' />

				<h1 className='detailed-country__name'>
					{ country.name }
				</h1>

				{ DataGroup1(country) }

				{ DataGroup2(country) }

				{
					borders.length ?
						<BorderCountries borderCountries={ borders } />
					: null
				}

		</article>
	)
}

function DataGroup1(country) {
	return (
		<dl className="detailed-country__data-group1">

			<div className='data-group1__data-field'>
				<dt className="data-group1__data-field__key">
					Native Name:
					</dt>

				<dd className="data-group1__data-field__value">
					{ country.nativeName }
				</dd>
			</div>

			<div className='data-group1__data-field'>
				<dt className="data-group1__data-field__key">
					Population:
					</dt>

				<dd className="data-group1__data-field__value">
					{ country.population }
				</dd>
			</div>

			<div className='data-group1__data-field'>
				<dt className="data-group1__data-field__key">
					Region:
					</dt>

				<dd className="data-group1__data-field__value">
					{ country.region }
				</dd>
			</div>

			<div className='data-group1__data-field'>
				<dt className="data-group1__data-field__key">
					Sub Region:
					</dt>

				<dd className="data-group1__data-field__value">
					{ country.subregion }
				</dd>
			</div>

			<div className='data-group1__data-field'>
				<dt className="data-group1__data-field__key">
					Capital:
					</dt>

				<dd className="data-group1__data-field__value">
					{ country.capital }
				</dd>
			</div>

		</dl>
	)
}

function DataGroup2(country) {
	
	/* render comma separated values */
	const toString = (lang, index, arrayLength) => {
		return index === arrayLength ?
			lang : lang + ', ';
	}

	return (
		<dl className="detailed-country__data-group2">

			<div className='data-group2__data-field'>
				<dt className="data-group2__data-field__key">
					Top Level Domain:
					</dt>

				<dd className="data-group2__data-field__value">
					{ /* it's array of domain strings */
						country.topLevelDomain.toString()
					}
				</dd>
			</div>

			<div className='data-group2__data-field'>
				<dt className="data-group2__data-field__key">
					Currencies:
					</dt>

				<dd className="data-group2__data-field__value">
					{ /* it's an array of currency objects */
						country.currencies.map(
							(curr, index, currencies) => 
							toString(curr.name, index +1, currencies.length)
						)
					}
				</dd>
			</div>

			<div className='data-group2__data-field'>
				<dt className="data-group2__data-field__key">
					Languages:
					</dt>

				<dd className="data-group2__data-field__value">
					{ /* it's an array of language objects */
						country.languages.map(
							(lang, index, languages) => 
							toString(lang.name, index + 1, languages.length)
						)
					}
				</dd>
			</div>

		</dl>
	)
}