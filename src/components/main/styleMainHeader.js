import styled from 'styled-components';

export const MainHeaderContainer = styled.div`
    width: 100%;
    max-width: 1440px;

    margin: 48px auto;
    padding: 0 80px;

    position: fixed;
    left: 0;
    right: 0;

    display: flex;
    flex-wrap: wrap;
    gap: 75px;
    justify-content: space-between;
`;

export const InputArea = styled.div`
    width: 480px;
    height: 56px;

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

    padding: 0 25px;

    border-radius: 5px;

    font-weight: 600;

    color: ${props => props.theme.text};
    background-color: ${props => props.theme.elements};
    box-shadow: 0 0 25px -20px black;
`;