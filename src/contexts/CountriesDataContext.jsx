import React from 'react';

const Fetch_URL = `https://restcountries.com/v2/all?fields=name,flag,alpha3Code,population,
	region,capital,nativeName,subregion,topLevelDomain,currencies,languages,borders;`;

export const CountriesDataContext = React.createContext();

export class CountriesDataProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      countriesData: [],
      filteredData: [],
      dataBeenFetched: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  /* This method first checks the localStorage for previously saved data.
	If not found, it then fetches new data from the api server */
  async fetchData() {
    let data,
      noLocalData = true;

    try {
      data = JSON.parse(localStorage.getItem('countriesData'));

      if (data && data.length) {
        noLocalData = false;
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);

      const response = await fetch(Fetch_URL);
      data = await response.json();
    }

    this.setState({ countriesData: data, dataBeenFetched: true });

    // Save the data for future use
    if (noLocalData) {
      localStorage.setItem('countriesData', JSON.stringify(data));
    }
  }

  render() {
    return (
      <CountriesDataContext.Provider
        value={{ ...this.state, toggleFilter: this.toggleFilter.bind(this) }}>
        {this.props.children}
      </CountriesDataContext.Provider>
    );
  }

  /*********************************    Filtering Stuff    **************************************/
  async toggleFilter(query) {
    let filteredData = [];

    // No query indicates to disable the filter
    if (query) {
      filteredData =
        query.type === 'name'
          ? this.nameFilter(query.value)
          : this.regionFilter(query.value);
    }

    setTimeout(
      () =>
        this.setState({
          filteredData: filteredData || [],
        }),
      0
    );
  }

  regionFilter(region) {
    return this.state.countriesData.filter(country =>
      country.region.includes(region)
    );
  }

  nameFilter(name) {
    return this.state.countriesData.filter(country =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
