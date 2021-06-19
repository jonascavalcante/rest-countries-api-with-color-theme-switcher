import React from 'react';

import MainHeader from './MainHeader';

import { MainTag, Container } from './style';

const Main = () => {
    return (
        <MainTag>
            <Container>
                <MainHeader />
            </Container>
        </MainTag>
    );
}

export default Main;