import React from 'react';

import MainHeader from './MainHeader';
import MainBody from './MainBody';

import { MainTag, Container } from './style';

const Main = () => {
    return (
        <MainTag>
            <Container>
                <MainHeader />
                <MainBody />
            </Container>
        </MainTag>
    );
}

export default Main;