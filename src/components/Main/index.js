import React from 'react';
import styled from 'styled-components';
import { FormContainer } from './FormContainer';
import { ResultContainer } from './ResultContainer';

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    flex: 1 1 auto;
    align-items: stretch;
    position: relative;
`;

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 960px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    flex: 1 1 auto;
    align-items: stretch;
    height: 100%;
    background-color: #EEEEEE;
`;
const Main = React.memo(props => {
    return (
        <MainContainer>
            <MainSection>
                <FormContainer 
                    inputValue={props.inputValue} 
                    checkboxValue={props.checkboxValue} 
                    handleChangeInputValue={props.handleChangeInputValue} 
                    handleChangeCheckboxValue={props.handleChangeCheckboxValue} 
                    handleFilterByLengthClick={props.handleFilterByLengthClick} 
                    handleFilterBySubstringClick={props.handleFilterBySubstringClick} 
                    />
                {props.resultArray ? 
                    <ResultContainer 
                        resultArray={props.resultArray}
                    /> : 
                    null
                }
            </MainSection>
        </MainContainer>
    )
});

export { Main };