import styled from 'styled-components';

export const MainHeaderContainer = styled.div`
    width: 100%;
    max-width: 1440px;

    margin: 48px auto;
    padding: 0 80px;

    @media (max-width: 1440px) {
        padding: 0 5.55%;
    }

    @media (max-width: 375px) {
        padding: 0 16px;
    }

    position: fixed;
    left: 0;
    right: 0;

    display: flex;
    flex-wrap: wrap;
    gap: 5.2%;

    @media (max-width: 740px) {
        gap: 40px;
    }

    @media (max-width: 655px) {
        margin: 25px auto;
    }

    justify-content: space-between;
`;

export const InputArea = styled.div`
    width: 480px;
    height: 56px;

    @media (max-width: 810px) {
        width: 342px;
    }

    @media (max-width: 655px) {
        height: 48px;
    }

    border-radius: 5px;

    background-color: ${props => props.theme.elements};
    box-shadow: 0 0 25px -20px black;

    display: flex;
    align-items: center;

    i, input {
        color: ${props => props.theme.text};
    }

    i {
        margin-left: 30px;
    }

    input {
        width: 100%;
        height: 100%;
        padding: 0 20px;

        font-weight: 600;

        background-color: transparent;

        ::placeholder {
            color: ${props => props.theme.text};
        }
    }
`;

export const Select = styled.select`
    width: 200px;
    height: 56px;

    @media (max-width: 655px) {
        height: 48px;
    }

    padding: 0 25px;

    border-radius: 5px;

    font-weight: 600;

    color: ${props => props.theme.text};
    background-color: ${props => props.theme.elements};
    box-shadow: 0 0 25px -20px black;
`;