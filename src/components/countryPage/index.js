import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { MainTag, Container, MainHeader, MainBody } from './styles';

function CountryPage() {

    const location = useLocation();

    const country = location.state?.info;

    return (
        <MainTag>
            <Container>

                <MainHeader>
                    <Link to="/">
                        <button><i className="fas fa-long-arrow-alt-left"></i>Back</button>
                    </Link>
                </MainHeader>

                <MainBody>
                    <img src={country.flag} alt={country.name} />

                    <div>
                        <h2>{country.name}</h2>

                        <div>
                            <p>Native Name: <span>{country?.nativeName}</span></p>
                            <p>Population: <span>{country?.population}</span></p>
                            <p>Region: <span>{country?.region}</span></p>
                            <p>Sub Region: <span>{country?.subregion}</span></p>
                            <p>Capital: <span>{country?.capital}</span></p>
                        </div>

                        <div>
                            <p>Top Level Domain: <span>{country?.topLevelDomain}</span></p>
                            <p>Currencies: <span>{country?.currencies[0].name}</span></p>
                            <p>Languages: <span>{country?.languages[0].name}</span></p>
                        </div>

                        <p>Border Countries: <button>{country?.borders[0]}</button></p>

                    </div>
                </MainBody>

            </Container>
        </MainTag>
    );
}

export default CountryPage;