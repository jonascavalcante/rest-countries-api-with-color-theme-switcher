import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { CountriesContext } from './/..//../App';

import { MainTag, Container, MainHeader, MainBody } from './styles';

function CountryPage() {

    let { name } = useParams();

    const countries = useContext(CountriesContext);

    let country = [];
    let languagesArray = [];
    let borderCountries = [];

    countries.allCountries.map(countryEl => {

        if (countryEl.name === name) {
            country = countryEl;
            filterCountry();
            filterBorderCountries();
        }

        return country;
    })

    function filterCountry() {

        country.languages.map(language => {

            if (country.languages.length > languagesArray.length + 1) {
                languagesArray.push(language.name + ", ");
            } else {
                languagesArray.push(language.name);
            }

            return languagesArray;
        })
    }

    function filterBorderCountries() {

        country.borders.map(country =>

            countries.allCountries.map(countryElement => {

                if (country === countryElement.alpha3Code) {
                    borderCountries.push(countryElement)
                }

                return borderCountries;
            })
        )
    }

    return (
        <MainTag>
            <Container>

                <MainHeader>
                    <Link to="/">
                        <button onClick={countries.refreshCountries}><i className="fas fa-long-arrow-alt-left"></i>Back</button>
                    </Link>
                </MainHeader>

                {country &&
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
                                {country.currencies && <p>Currencies: <span>{country.currencies[0].name}</span></p>}
                                <p>Languages: <span>{languagesArray}</span></p>
                            </div>

                            <p>Border Countries:
                                {
                                    borderCountries.map(country =>
                                        <Link to={{
                                            pathname: `/countryPage/${country.name}`,
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
                }

            </Container>
        </MainTag>
    );
}

export default CountryPage;