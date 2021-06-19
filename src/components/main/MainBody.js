import React, { useContext } from 'react';

import { CountriesContext } from './/..//../App';

import Card from './Card';

import { MainBodyContainer } from './styleMainBody';

const MainBody = () => {

    const countries = useContext(CountriesContext);

    return (
        <MainBodyContainer>
            {countries.countries.map(country =>
                <Card
                    key={country.name}
                    info={country}
                />
            )}
        </MainBodyContainer>
    );
}

export default MainBody;