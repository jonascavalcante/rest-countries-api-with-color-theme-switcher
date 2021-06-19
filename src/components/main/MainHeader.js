import React, { useContext } from 'react';

import { CountriesContext } from '../../App';

import { MainHeaderContainer, InputArea, Select } from './styleMainHeader';

const MainHeader = () => {

    const countries = useContext(CountriesContext);

    return (
        <MainHeaderContainer>
            <InputArea>
                <i className="fas fa-search"></i>
                <input
                    onChange={(e) => countries.searchCountry(e.target.value)}
                    type="text"
                    placeholder="Search for a country..."
                />
            </InputArea>

            <Select
                id="filterByRegion"
                onChange={(e) => countries.handleCountriesRegion(e.target.value)}
            >
                <option hidden>Filter by Region</option>
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </Select>
        </MainHeaderContainer>
    );
}

export default MainHeader;