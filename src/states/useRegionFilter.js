import {useReducer, useContext} from 'react';
import {CountriesDataContext} from '../contexts/CountriesDataContext.jsx';

export default function useRegionFilter(initialState) {

	const {toggleFilter} = useContext(CountriesDataContext);

	const reducer = (state, filterRegion) => {
	/* apply or disable filter based upon whether
		filterRegion is passed to the this function or not */
		filterRegion ? 
			toggleFilter({type: 'region', value: filterRegion}) 
			: toggleFilter();
		
		return {
			labelText: filterRegion || 'Filter by Region',
				
			clearIcon: state.clearIcon === 'none' ? 
				'unset' : 'none'
		};
	}

	const [filterState, setFilterState] = useReducer(reducer, initialState);

	return [filterState, setFilterState];
}