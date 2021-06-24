import styled from 'styled-components';

export const MainTag = styled.main`
    margin-top: 80px;
    background-color: ${props => props.theme.background};
`;

export const Container = styled.div`
    max-width: 1440px;
    min-height: calc(100vh - 80px);
    margin: auto;

    display: flex;
    flex-direction: column;

    padding: 0 80px;

    @media (max-width: 1440px) {
        padding: 0 5.55%;
    }

    @media (max-width: 375px) {
        padding: 0 16px;
    }
`;