import {useReducer} from 'react';

export default function useDropDown(initialState) {

	const [dropDownState, toggleDropDown] = useReducer(reducer, initialState);
	
	/* this function would add 'focused' class to the clicked element,
		and toggle the dropdown */
	function reducer(state, action) {
		
		const elementToFocus = 	action.target;
		
		// add 'focused' class to elementToFocus
		document.querySelector(elementToFocus).classList.toggle('focused');

		return state !== 'none' ?
			'none' : 'unset';
	}

	return [dropDownState, toggleDropDown];
}