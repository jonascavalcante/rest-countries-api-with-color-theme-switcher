import styled from 'styled-components';

export const HeaderTag = styled.header`
    width: 100%;

    top: 0;
    position: fixed;

    background-color: hsl(209, 23%, 22%);
`;

export const Container = styled.div`
    max-width: 1440px;
    height: 80px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 80px;

    h1, button {
        margin: 0;
        padding: 0;

        color: hsl(0, 0%, 100%);
    }

    h1 {
        font-size: 24px;
        font-weight: 800;
    }

    button {
        height: 35px;

        font-size: 14px;
        font-weight: 600;
        background-color: transparent;

        i {
            margin-right: 10px;
        }
    }
`;