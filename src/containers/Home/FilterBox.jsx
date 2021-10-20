import React from 'react';
import useDropDown from '../../states/useDropDown.js';
import useRegionFilter from '../../states/useRegionFilter.js';

import ClearIcon from '../../comps/ClearIcon.jsx';
import DropDown from '../../comps/DropDown.jsx';
import DropdownIcon from '../../comps/DropdownIcon.jsx';

const DropDown_Items = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export default function FilterBox() {	
	const [dropDownState, toggleDropDown] = useDropDown('none');
	
	const [filterState, setFilterState] = useRegionFilter({
		labelText: 'Filter by Region',
		clearIcon: 'none'
	});

	
	React.useEffect(_=> {
		const [label, dropDown, clearIcon] = document.querySelector('.filter-box').childNodes;

		label.onclick = () => toggleDropDown({target: '.filter-box__label'})

		// listen to click on each filter option
		dropDown.childNodes.forEach(region =>
				region.onclick = e => {
					toggleDropDown({target: '.filter-box__label'});
					setFilterState(e.target.innerText);
				} 
			);

		// listen to click on clear-icon
		clearIcon.onclick = () => setFilterState();		
	}, [])



	return (
		<div className='filter-box'>

			<label className='filter-box__label' tabIndex='0'>
				<span className='filter-box__label-text'>
					{ filterState.labelText }
				</span>
				<DropdownIcon parent='filter-box' />
			</label>

			<DropDown parent='filter-box' itemsArray={ DropDown_Items } state={ dropDownState } />
			
			<ClearIcon parent='filter-box' state={ filterState.clearIcon } />

		</div>
	)
}