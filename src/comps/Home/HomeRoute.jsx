import React from 'react';
import '../../styles/HomeRoute.scss';

import FilterBox from './FilterBox.jsx';
import OverviewCard from './OverviewCard.jsx';
import SearchBox from './SearchBox.jsx';

import { CountriesDataContext } from '../../contexts/CountriesDataContext.jsx';
import { SearchHistoryProvider } from '../../contexts/SearchHistoryContext.jsx';


export default function Home() {
	const {countriesData, filteredData} = React.useContext(CountriesDataContext);

	return (
		<main className='home-route'>

			<div className="tools-section">
				<SearchHistoryProvider>
					<SearchBox/>
				</SearchHistoryProvider>

				<FilterBox/>
			</div>

			<section className='cards-section'>
				{ 
					filteredData.length ?
						filteredData.map(OverviewCard)
						:
						countriesData.map(OverviewCard)
				}
			</section>

		</main>
	)
}
