import React from 'react';
import {SearchHistoryContext} from '../../contexts/SearchHistoryContext.jsx';
import useDropDown from '../../states/useDropDown.js';
import useSearchFilter from '../../states/useSearchFilter.js';

import ClearIcon from '../../comps/ClearIcon.jsx';
import SearchIcon from './SearchIcon.jsx';
import DropDown from '../../comps/DropDown.jsx';

export default function input() {
	const [dropDownState, toggleDropDown] = useDropDown('none');
	const [filterState, setFilterState] = useSearchFilter({clearIcon: 'none'})

	const { searchHistory, updateSearchHistory } = React.useContext(SearchHistoryContext);


	const handleSubmit = e => {
		e.preventDefault();
		const inputValue = document.querySelector('.search-box__input').value;

		setFilterState(inputValue);
		updateSearchHistory(inputValue);
	}


	React.useEffect(()=> {
		const input = document.querySelector('.search-box__input');
		const clearIcon = document.querySelector('.search-box__clear-icon');
		const dropDown = document.querySelector('.search-box__dropdown');

		input.onclick = () => toggleDropDown({type: 'name'});

		clearIcon.onclick = ()=> {
			setFilterState();
			input.value = '';
		}

		// check whether dropDown was rendered or not, i.e. searchHistory is null or not
		dropDown && dropDown.childNodes.forEach(item => 
			item.onclick = e => {
				input.value = e.target.innerText;
				handleSubmit(e);
				toggleDropDown({type: 'name'});
		})
	})
	
	return (
		<form className='search-box' onSubmit={ handleSubmit }>
			
			<SearchIcon className='search-box__search-icon' />

			<input type='text' className='search-box__input'
					 aria-label='search-bar'
					placeholder='Search for a country...'
				/>
	
			{
				searchHistory &&
				<DropDown parent='search-box' itemsArray={ searchHistory } state={ dropDownState } />
			}

			<ClearIcon parent='search-box' state={ filterState.clearIcon } />

		</form>
	)
}
