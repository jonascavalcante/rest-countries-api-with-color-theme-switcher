import React, { useContext } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { CountriesContext } from './/..//../App';

import { MainTag, Container, MainHeader, MainBody } from './styles';

function CountryPage() {

    const location = useLocation();
    
    const country = location.state?.info;

    let { name } = useParams();
    console.log(name);
    
    let languagesArray = [];

    country.languages.map(language => {
        
        if (country.languages.length > languagesArray.length + 1) {
            languagesArray.push(language.name + ", ");
        } else {
            languagesArray.push(language.name);
        }
        
        return languagesArray;
    })

    const countries = useContext(CountriesContext);

    let borderCountries = [];

    country.borders.map(country => 
        
        countries.allCountries.map(countryEl => {
        
            if (country === countryEl.alpha3Code) {
                borderCountries.push(countryEl)
            }

            return borderCountries;
        })    
    )

    return (
        <MainTag>
            <Container>

                <MainHeader>
                    <Link to="/">
                        <button onClick={countries.refreshCountries}><i className="fas fa-long-arrow-alt-left"></i>Back</button>
                    </Link>
                </MainHeader>

                <MainBody>
                    <img src={country.flag} alt={country.name} />

                    <div>
                        <h2>{country.name}</h2>

                        <div>
                            <p>Native Name: <span>{country.nativeName}</span></p>
                            <p>Population: <span>{country.population}</span></p>
                            <p>Region: <span>{country.region}</span></p>
                            <p>Sub Region: <span>{country.subregion}</span></p>
                            <p>Capital: <span>{country.capital}</span></p>
                        </div>

                        <div>
                            <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                            <p>Currencies: <span>{country.currencies[0].name}</span></p>
                            <p>Languages: <span>{languagesArray}</span></p>
                        </div>

                        <p>Border Countries:
                            {
                                borderCountries.map(country => 
                                    <Link to={{
                                                pathname: `/countryPage/${country.name}`,
                                                state: { info: country }
                                            }}
                                            key={country.name}
                                    >
                                        <button>{country.name}</button>
                                    </Link>
                                )
                            }
                        </p>

                    </div>
                </MainBody>

            </Container>
        </MainTag>
    );
}

export default CountryPage;