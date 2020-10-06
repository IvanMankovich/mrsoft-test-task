import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
    list-style-position: inside;
    font-size: 14px;
`;

const ListItem = props => {
    return (
        <StyledListItem>{props.value}</StyledListItem>
    )
};

export { ListItem };