import React from 'react';

import { MainHeaderContainer, InputArea, Select } from './styleMainHeader';

const MainHeader = () => {
    return (
        <MainHeaderContainer>
            <InputArea>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search for a country..." />
            </InputArea>
        
            <Select>
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