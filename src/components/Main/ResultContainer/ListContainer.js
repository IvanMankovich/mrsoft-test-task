import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';

const StyledListContainer = styled.ol`
    list-style-type: decimal;
    padding: 0;
    margin: 0;
`;

const ListContainer = props => {
    const generateRandomIndex = () => {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz$_^'.split('');
        
        let str = '';
        for (let i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * (chars.length))];
        }
        return str;
    }

    return (
        <StyledListContainer>
            {props.resultArray.map(item => {
                return (
                    <ListItem key={generateRandomIndex()} value={item}/>
                )
            })}
        </StyledListContainer>
    )
};

export { ListContainer };