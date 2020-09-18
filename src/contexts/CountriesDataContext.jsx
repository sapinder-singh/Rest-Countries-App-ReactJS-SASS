import React from 'react';

export const CountriesDataContext = React.createContext();

export class CountriesDataProvider extends React.Component {
	constructor() {
		super();
		this.state = {
			countriesData: [],
			filteredData: [],
			dataBeenFetched: false
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		let data, noLocalData = true;

		try {
			data = JSON.parse(localStorage.getItem('countriesData'));

			if(data && data.length) {
				noLocalData = false;
			}
			else {
				throw(new Error());
			}
		}
		catch (err) {
			console.log(err);

			const response = await fetch(`https://restcountries.eu/rest/v2/all
			?fields=name;flag;alpha3Code;population;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders;`);
			data = await response.json();
		}
		
		this.setState({countriesData: data, dataBeenFetched: true});

		if(noLocalData) {
			localStorage.setItem('countriesData', JSON.stringify(data));
		}
	}

	render() {
		return (
			<CountriesDataContext.Provider 
				value={{...this.state, 
								toggleFilter: this.toggleFilter.bind(this)
							}}>
				{ this.props.children }
			</CountriesDataContext.Provider>
		)
	}

	/*********************************    Filtering Stuff    **************************************/
	toggleFilter(criteria, value) {
		let filteredData = []

		if (criteria) {
			filteredData = criteria === 'name' ?
				this.nameFilter(value) : this.regionFilter(value);
		}

		setTimeout(() => this.setState({
			filteredData: filteredData || []
		}), 0);
	}


	regionFilter(region) {
		return this.state.countriesData
					.filter(country => 
						country.region.includes(region)
					)
	}

	
	nameFilter(name) {
		return this.state.countriesData
				.filter(country => 
					country.name.toLowerCase().includes(name.toLowerCase())
				)
	}
}
