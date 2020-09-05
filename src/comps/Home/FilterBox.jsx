import React from 'react';
import ClearIcon from '../ClearIcon.jsx';
import { ReactComponent as ArrowIcon } from '../../images/dropdown-arrow.svg';
import { CountriesDataContext } from '../../contexts/CountriesDataContext.jsx';

const DEFAULT_LABEL_TEXT = 'Filter by Region';

export default function FilterBox() {

	const [optionsPanelDisplay, setOptionsPanelDisplay] = React.useState('none');
	const [labelText, setLabelText] = React.useState(DEFAULT_LABEL_TEXT);
	const [clearIconDisplay, setClearIconDisplay] = React.useState('none');

	const {toggleFilter} = React.useContext(CountriesDataContext);


	function toggleOptionsPanel() {
		setOptionsPanelDisplay(prev =>
			prev === 'none' ? 'inherit' : 'none');
	}

	function clearFilters() {
		setOptionsPanelDisplay('none');

		setClearIconDisplay('none');
		setLabelText(DEFAULT_LABEL_TEXT);

		toggleFilter();
	}
	


	React.useEffect(_=> {
		
		const [filterLabel, ClearIcon, optionsPanel] = 
						document.querySelector('.home-route .filter-box').childNodes;
		
		filterLabel.onclick = () => toggleOptionsPanel();

		/* listen to click on each filter option */
		optionsPanel.childNodes.forEach(option =>
					option.onclick = e => {

						setLabelText(e.target.innerText);

						toggleFilter('region', e.target.innerText);

						setClearIconDisplay('initial');
						
						toggleOptionsPanel(); // hide the options pannel after filter's applied
					}
			);

		ClearIcon.onclick = () => clearFilters();		
	}, [])



	return (
		<div className='filter-box'>

			<label className='filter-box__label' tabIndex='0'>
				<span className='filter-box__label__text'>
					{ labelText }
				</span>
				<ArrowIcon className='filter-box__label__arrow-icon' />
			</label>

			<ClearIcon class='filter-box__label__clear-icon' display={clearIconDisplay} />


			<div className='filter-box__options' id="options"
								style={{ display: optionsPanelDisplay }}>
				
				{ 
					['Africa', 'America', 'Asia', 'Europe', 'Oceania']
						.map(
							(elem, index) => 
								<option className='filter-box__options__region' key={index}>
									{elem}
								</option>
						)
				}
			</div>

		</div>
	)
}
