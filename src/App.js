import React, { useState, useEffect, createContext, useMemo } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Header from './components/header';
import Main from './components/main';
import CountryPage from './components/countryPage';

import GlobalStyle from './styles/global';
import themes from './styles/themes';

export const CountriesContext = createContext();

function App() {

  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme])

  let themeButton = document.getElementById('themeButton');

  function handleToggleTheme() {

    if (themeButton.innerText === 'Dark Mode') {
      themeButton.innerHTML = `<i class="far fa-moon"></i>Light Mode`;
    } else {
      themeButton.innerHTML = `<i class="fas fa-moon"></i>Dark Mode`;
    }

    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    (async () => {
      const req = await fetch("https://restcountries.com/v2/all");
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

  function handleCountriesRegion(e) {

    let countriesArray = [];

    allCountries.map(country => {

      if (country.region === e) {
        countriesArray.push(country);
      }

      return countriesArray;
    })
    setCountries(countriesArray);
    window.scrollTo(0, 0);
  }

  function refreshCountries() {
    setCountries(allCountries);
  }

  return (
    <CountriesContext.Provider value={{ countries, refreshCountries, allCountries, searchCountry, handleCountriesRegion }}>
      <ThemeProvider theme={currentTheme}>

        <GlobalStyle />

        <BrowserRouter>

          <Header onToggleTheme={handleToggleTheme}/>

          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/countryPage/:name">
              <CountryPage />
            </Route>

          </Switch>

        </BrowserRouter>

      </ThemeProvider>
    </CountriesContext.Provider>
  );
}

export default App;