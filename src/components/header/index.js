import React from 'react';

import { HeaderTag, Container } from './style';

const Header = () => {
    return ( 
        <HeaderTag>
            <Container>
                <h1>Where in the world?</h1>
                <button><i className="fas fa-moon"></i>Dark Mode</button>
            </Container>
        </HeaderTag>
     );
}
 
export default Header;