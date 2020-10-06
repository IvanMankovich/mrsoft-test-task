import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1em 0;
    background-color: #000000;
    color: #FFFFFF;
    text-align: center;
`;

const H1 = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #FFFFFF;
    letter-spacing: 0.1em;
`;

const Header = props => {
    return (
        <HeaderContainer>
            <H1>MRSoft Test Task</H1>
        </HeaderContainer>
    )
};

export { Header };