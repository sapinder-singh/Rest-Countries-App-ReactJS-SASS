import React from 'react';

export const SearchHistoryContext = React.createContext();

export class SearchHistoryProvider extends React.Component {
	constructor() {
		super();
		this.state = {
			searchHistory: []
		}
	}

	componentDidMount() {
		this.setState({
			searchHistory: this.getSearchHistory()
		})
	}
	
	getSearchHistory() {
		try {
			return JSON.parse(localStorage.getItem('searchHistory')) || [];
		}
		catch (err) {
			console.log(err);
			return []
		}
	}

	updateSearchHistory(newSearch) {
		if(this.isRepeatedSearch(newSearch))
			return;

		const newSearchHistory = [...this.state.searchHistory, newSearch];
		
		try {
			localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
		}
		catch(err) {
			console.log(err);
		}
		
		this.setState({searchHistory: newSearchHistory})
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
