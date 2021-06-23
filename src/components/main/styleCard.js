import styled from 'styled-components';

export const CardContainer = styled.div`
    height: 336px;

    border-radius: 5px;

    color: ${props => props.theme.text};
    background-color: ${props => props.theme.elements};

    img {
        width: 100%;
        max-height: 160px;
        
        object-fit: contain;

        border-radius: 5px 5px 0 0;
    }

    h2, p {
        padding: 0 25px;
    }

    h2 {
        margin: 15px 0;
        font-size: 18px;
        font-weight: 800;
    }

    p {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 600;

        span {
            font-weight: 300;
        }
    }
`;