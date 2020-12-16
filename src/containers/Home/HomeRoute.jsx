import React from 'react';
import '../../styles/HomeRoute.scss';

import FilterBox from './FilterBox.jsx';
import SearchBox from './SearchBox.jsx';
import OverviewCard from './OverviewCard.jsx';
import { CountriesDataContext } from '../../contexts/CountriesDataContext.jsx';
import { SearchHistoryProvider } from '../../contexts/SearchHistoryContext.jsx';

export default function Home() {
	const { countriesData, filteredData } = React.useContext(CountriesDataContext);

	return (
		<main className='home-route'>

			<section className='home-route__tools-section'>
				<SearchHistoryProvider>
					<SearchBox/>
				</SearchHistoryProvider>

				<FilterBox/>
			</section>
		
			<section className='home-route__cards-section'>
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
