import styled from 'styled-components';

export const Container = styled.article`
    width: 250px;
    height: 250px;
    border: 1px solid white;
    margin: 33px;
    display: inline-block;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 4px 4px #e5e5e5;
    transition: all 0.3s ease 0s;

    & + div {
        margin-left: 30px;
       
    }

    .img-button {
        margin: 20px 15px;

        img {
            margin-bottom: 16px;
        }

        button {
            background: #fff;
            border: none;
            img {
                border: none;
                background: transparent;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.8)
                }

            }

            .edit {
                position: absolute;
                top: 20px;
                right: 53.25px;
            }

            .close {
                position: absolute;
                top: 20px;
                right: 15px;
            }
                    
        }
        

        h2 {
            font-size: 1rem;
            font-weight: 700;
            color: var(--green);
            
        }

    }


    .meta {
        margin: 9px 10px;
        padding: 43px 16px 0 16px; 
        border-top: 1px solid #ABABAB;

    }
`