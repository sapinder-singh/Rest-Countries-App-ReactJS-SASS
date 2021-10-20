import React from 'react';

export const SearchHistoryContext = React.createContext();

export class SearchHistoryProvider extends React.Component {
	constructor() {
		super();
		this.state = {
			searchHistory: null
		}
	}

	componentDidMount() {
		this.setState({
			searchHistory: this.getSearchHistory()
		})
	}
	
	getSearchHistory() {
		try {
			return JSON.parse(localStorage.getItem('searchHistory')) || null;
		}
		catch (err) {
			console.error(err);
			return null
		}
	}

	updateSearchHistory(newSearch) {
		let searchHistory = [newSearch];

		if(this.state.searchHistory) {
			// immediately exit if this is a repeated search
			if(this.isRepeatedSearch(newSearch)) return;
			
			// restrict searchHistory.length to 5
			searchHistory = this.state.searchHistory.length < 5 ?
				[newSearch, ...this.state.searchHistory]
				:
				[newSearch, ...this.state.searchHistory.slice(0,-1)];
		}

		try {
			localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
		}
		catch(err) {
			console.error(err);
		} 
		finally {
			this.setState({searchHistory: searchHistory});
		}
	}

	isRepeatedSearch(newSearch) {
		let result = this.state.searchHistory.filter(search => search === newSearch);
		return result.length;
	}

	render() {
		return (
			<SearchHistoryContext.Provider
				value={{...this.state,
								updateSearchHistory: this.updateSearchHistory.bind(this)}}>
				{ this.props.children }
			</SearchHistoryContext.Provider>
		)
	}
}
