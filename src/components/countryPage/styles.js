import styled from 'styled-components';

export const MainTag = styled.main`
    margin-top: 80px;
    background-color: ${props => props.theme.background};
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 80px;
`;

export const MainHeader = styled.div`
    button {
        width: 136px;
        height: 40px;
        
        font-size: 14px;
        font-weight: 600;

        color: ${props => props.theme.text};
        background-color: ${props => props.theme.elements};

        i {
            margin-right: 10px;
        }
    }
`;

export const MainBody = styled.div`
    min-height: calc(100vh - 360px);
    margin-top: 80px;

    display: flex;
    gap: 130px;
    
    img {
        width: calc(50% - 65px);
        max-height: 395px;
        object-fit: contain;
    }

    >div {
        width: calc(50% - 65px);
        max-height: 395px;
        padding: 40px 0 35px 0;

        display: flex;
        flex-wrap: wrap;
        
        color: ${props => props.theme.text};

        h2 {
            width: 100%;
            margin-bottom: 20px;
            font-weight: 800;
        }

        >div {
            width: 50%;

            p {
                margin-top: 10px;
            }

            p:first-child {
                margin-top: 0;
            }
        }

        p {
            font-weight: 600;
                
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

                span {
                    font-weight: 300;
                }

                button {
                    min-width: 96px;
                    height: 28px;
                    padding: 0 10px;

                    font-weight: 300;

                    color: ${props => props.theme.text};
                    background-color: ${props => props.theme.elements};
                }
        }

        >p {
            margin-top: 50px;
        }
    }
`;