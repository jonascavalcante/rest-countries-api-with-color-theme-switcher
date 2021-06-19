import React, { useState, useEffect, createContext } from 'react';

import Header from './components/header';
import Main from './components/main';

import GlobalStyle from './styles/global';

export const CountriesContext = createContext();

function App() {

  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await fetch("https://restcountries.eu/rest/v2/all");
      const resp = await req.json();
      setCountries(resp);
      setAllCountries(resp);
    })();
  }, []);

  function searchCountry(e) {

    document.getElementById('filterByRegion').selectedIndex = 0;

    let countriesArray = [];

    allCountries.map(country => {

      let countryName = country.name.toLowerCase();
      let digitedName = e.toLowerCase();

      if (countryName.includes(digitedName)) {
        countriesArray.push(country);
      }

      return countriesArray;

    })
    setCountries(countriesArray);
    window.scrollTo(0, 0);
  }

  return (
    <CountriesContext.Provider value={{ countries, searchCountry }}>
      <GlobalStyle />
      <Header />
      <Main />
    </CountriesContext.Provider>
  );
}

export default App;