import React from 'react';
import BorderCountries from './BorderCountries.jsx';

export default function CountryDetails(country, borderCountries) {
	return (
		<article className='detailed-country' key={ country.name }>

				<img src={ country.flag } className='detailed-country__flag' alt='img-flag' />

				<h1 className='detailed-country__name'>
					{ country.name }
				</h1>

				{ DataGroup1(country) }

				{ DataGroup2(country) }

				{
					borderCountries.length &&
					<BorderCountries borderCountries={ borderCountries } />
				}

		</article>
	)
}

function DataGroup1(country) {
	return (
		<div className="detailed-country__data-group1">

			<dl className='data-group1__data-field'>
				<dt className="data-group1__data-key">
					Native Name:
					</dt>

				<dd className="data-group1__data-value">
					{ country.nativeName }
				</dd>
			</dl>

			<dl className='data-group1__data-field'>
				<dt className="data-group1__data-key">
					Population:
					</dt>

				<dd className="data-group1__data-value">
					{ country.population }
				</dd>
			</dl>

			<dl className='data-group1__data-field'>
				<dt className="data-group1__data-key">
					Region:
					</dt>

				<dd className="data-group1__data-value">
					{ country.region }
				</dd>
			</dl>

			<dl className='data-group1__data-field'>
				<dt className="data-group1__data-key">
					Sub Region:
					</dt>

				<dd className="data-group1__data-value">
					{ country.subregion }
				</dd>
			</dl>

			<dl className='data-group1__data-field'>
				<dt className="data-group1__data-key">
					Capital:
					</dt>

				<dd className="data-group1__data-value">
					{ country.capital }
				</dd>
			</dl>

		</div>
	)
}

function DataGroup2(country) {
	
	// render comma separated values
	const toString = (lang, index, arrayLength) => {
		return index === arrayLength ?
			lang : lang + ', ';
	}

	return (
		<div className="detailed-country__data-group2">

			<dl className='data-group2__data-field'>
				<dt className="data-group2__data-key">
					Top Level Domain:
					</dt>

				<dd className="data-group2__data-value">
					{ 
						// it's an array of domain strings
						country.topLevelDomain.toString()
					}
				</dd>
			</dl>

			<dl className='data-group2__data-field'>
				<dt className="data-group2__data-key">
					Currencies:
					</dt>

				<dd className="data-group2__data-value">
					{ 
						// it's an array of currency objects
						country.currencies.map(
							(curr, index, currencies) => 
							toString(curr.name, index +1, currencies.length)
						)
					}
				</dd>
			</dl>

			<dl className='data-group2__data-field'>
				<dt className="data-group2__data-key">
					Languages:
					</dt>

				<dd className="data-group2__data-value">
					{ 
						// it's an array of language objects
						country.languages.map(
							(lang, index, languages) => 
							toString(lang.name, index + 1, languages.length)
						)
					}
				</dd>
			</dl>

		</div>
	)
}