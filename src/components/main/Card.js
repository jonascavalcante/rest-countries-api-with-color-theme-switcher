import React from 'react';

import { CardContainer } from './styleCard';

const Card = (props) => {
    return ( 
        <CardContainer>
            <img src={props.info.flag} alt={props.info.name} />
            <h2>{props.info.name}</h2>
            <p>Population: <span>{props.info.population}</span></p>
            <p>Region: <span>{props.info.region}</span></p>
            <p>Capital: <span>{props.info.capital}</span></p>
        </CardContainer>
    );
}

export default Card;