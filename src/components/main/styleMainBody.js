import styled from 'styled-components';

export const MainBodyContainer = styled.main`
    height: 100%;

    padding: 152px 0 48px 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(263px, 263px) ) ;
    gap: 75px;
    
    justify-content: space-between;
    
    a {
        text-decoration: none;
    }

    @media (max-width: 810px) {
        gap: 40px;
    }

    @media (max-width: 655px) {
        padding: 190px 0 48px 0;
        justify-content: center;
    }
`;