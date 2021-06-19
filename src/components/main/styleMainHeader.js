import styled from 'styled-components';

export const MainHeaderContainer = styled.div`
    width: 100%;
    height: 152px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InputArea = styled.div`
    width: 480px;
    height: 56px;

    border-radius: 5px;

    background-color: hsl(209, 23%, 22%);

    display: flex;
    align-items: center;

    i, input {
        color: hsl(0, 0%, 100%);
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
            color: hsl(0, 0%, 100%);
        }
    }
`;

export const Select = styled.select`
    width: 200px;
    height: 56px;

    border-radius: 5px;

    font-weight: 600;

    color: hsl(0, 0%, 100%);
    background-color: hsl(209, 23%, 22%);
`;