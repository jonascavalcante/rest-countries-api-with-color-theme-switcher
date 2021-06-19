import React, { useState, useEffect, createContext } from 'react';

import Header from './components/header';
import Main from './components/main';

import GlobalStyle from './styles/global';

export const CountriesContext = createContext();

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await fetch("https://restcountries.eu/rest/v2/all");
      const resp = await req.json();
      setCountries(resp);
    })();
  }, []);

  return (
    <CountriesContext.Provider value={countries}>
      <GlobalStyle />
      <Header />
      <Main />
    </CountriesContext.Provider>
  );
}

export default App;