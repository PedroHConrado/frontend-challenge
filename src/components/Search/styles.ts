import styled from 'styled-components';

export const Container = styled.form`
    background: var(--green);
    box-sizing: border-box;
    width: 100%;
    height: 203px;
    display: flex;
    align-items: center;

    label {
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        line-height: 2rem;

    }

    .select {
        margin-left: 4.5rem;
    }

    .local {
        margin-left: 3.5rem;
    }
    
    .meta {
        margin-left: 3.5rem;
    }
    
    input, select {
        width: 303px;
        height: 48px;
        border-radius: 7px;
        font-size: 1rem;
        padding: 0.8rem 1rem;

        border: 1px solid #FFFFFF;
        color: var(--text-title);
    }

    select {
        width: 455px;
        height: 48px;
        border-radius: 7px;
    }

    button {
        width: 203px;
        height: 49px;
        font-size: 1.125rem;
        font-weight: 400;
        font-style: normal;
        color: #FFFFFF;
        margin-left: 4.5rem;
        margin-top: 2rem;
        border-radius: 7px;
        border: 1px solid var(--green-dark);
        background: var(--green-dark);
    }
`