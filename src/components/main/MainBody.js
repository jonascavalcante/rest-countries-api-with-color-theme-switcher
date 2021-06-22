import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CountriesContext } from './/..//../App';

import Card from './Card';

import { MainBodyContainer } from './styleMainBody';

const MainBody = () => {

    const countries = useContext(CountriesContext);

    return (
        <MainBodyContainer>
            {countries.countries.map(country =>

                <Link
                    to={{
                        pathname: `/countryPage/${country.name}`,
                        state: { info: country }
                    }}
                    key={country.name}
                >

                    <Card info={country} />

                </Link>

            )}
        </MainBodyContainer>
    );
}

export default MainBody;