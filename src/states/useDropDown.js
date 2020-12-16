import {useReducer} from 'react';

export default function useDropDown(initialState) {

	const [dropDownState, toggleDropDown] = useReducer(reducer, initialState);
	
	function reducer(state, action) {
		// action.filterType can be 'name' or 'region'
		const elementToFocus = 	action.type === 'name' ? 
			'.search-box__input' : '.filter-box__label';
		
		// add 'focused' class to elementToFocus
		document.querySelector(elementToFocus).classList.toggle('focused');

		return state !== 'none' ?
			'none' : 'unset';
	}

	return [dropDownState, toggleDropDown];
}