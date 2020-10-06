import React from 'react';
import styled from 'styled-components';
import { ListContainer } from './ListContainer';

const StyledResultContainer = styled.section`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
`;

const H3 = styled.h3`
    font-size: 18px;
`;

const FormTitle = styled(H3)`
    text-align: center;
`;

const ResultContainer = props => {
    return (
        <StyledResultContainer>
            <FormTitle>Result</FormTitle>
            {props.resultArray.length ? <ListContainer resultArray={props.resultArray} /> : <p>No result on search conditions.</p>}
        </StyledResultContainer>
    )
};

export { ResultContainer };