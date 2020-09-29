import React from 'react';
import ClearIcon from './ClearIcon.jsx';
import SearchIcon from './SearchIcon.jsx';
import {CountriesDataContext} from '../contexts/CountriesDataContext.jsx';
import {SearchHistoryContext} from '../contexts/SearchHistoryContext.jsx';


export default function SearchBox() {
	const { filteredData, toggleFilter } = React.useContext(CountriesDataContext);
	const [clearIconDisplay, setClearIconDisplay] = React.useState(filteredData.length || 'none');

	const { searchHistory, updateSearchHistory } = React.useContext(SearchHistoryContext);

	const handleSubmit = e => {
		e.preventDefault();
		const searchInput = document.querySelector('.search-wrapper__search-box').value;

		toggleFilter('name', searchInput);
		setClearIconDisplay('initial');

		updateSearchHistory(searchInput);
	}

	const clearSearchFilter = () => {
		toggleFilter();
		setClearIconDisplay('none');
	}

	React.useEffect(() => {
		document.querySelector('.search-wrapper__clear-icon')
			.onclick = () => clearSearchFilter();
	})


	
	return (
		<form className='search-wrapper' onSubmit={ handleSubmit }>
			
			<SearchIcon className='search-wrapper__search-icon' />

			<input type='text' list='search-history'
					className='search-wrapper__search-box'
					 aria-label='search-box'
					placeholder='Search for a country...'
				/>

			<ClearIcon class='search-wrapper__clear-icon' display={ clearIconDisplay } />

			<datalist id='search-history' className='search-wrapper__history'>
			{
				!searchHistory ?
					null
					 :
					searchHistory.map((item, index) => 
						<option className='history__item' key={ index }>
							{ item }
						</option>
					)
			}
			</datalist>
		</form>
	)
}
