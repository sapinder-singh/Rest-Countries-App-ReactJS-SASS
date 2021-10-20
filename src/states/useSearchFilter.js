import {useReducer, useContext} from 'react';
import {CountriesDataContext} from '../contexts/CountriesDataContext.jsx';

export default function useSearchFilter(initialState) {

	const {toggleFilter} = useContext(CountriesDataContext);

	const reducer = (state, filterName) => {
	/* apply or disable filter based upon whether
		filterRegion is passed to the this function or not */
		if(filterName) { 
			toggleFilter({type: 'name', value: filterName});
		} else {
			toggleFilter();
		}
		
		return {	
			clearIcon: state.clearIcon === 'none' ? 
				'unset' : 'none'
		};
	}

	const [filterState, setFilterState] = useReducer(reducer, initialState);

	return [filterState, setFilterState];
}