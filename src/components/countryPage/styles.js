import styled from 'styled-components';

export const MainTag = styled.main`
    margin-top: 80px;
    background-color: hsl(207, 26%, 17%);
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

        color: hsl(0, 0%, 100%);
        background-color: hsl(209, 23%, 22%);

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
        
        color: hsl(0, 0%, 100%);

        h2 {
            width: 100%;
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
                
                span {
                    margin-left: 5px;
                    font-weight: 300;
                }

                button {
                    width: 96px;
                    height: 28px;
                    margin-left: 10px;

                    font-weight: 300;

                    color: hsl(0, 0%, 100%);
                    background-color: hsl(209, 23%, 22%);
                }
        }

        >p {
            align-self: flex-end;
        }
    }
`;