import React from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.form`
    display: block;
    width: 100%;
`;

const BlockSection = styled.section`
    display: block;
    margin: 0.5em;
`;

const H2 = styled.h2`
    font-size: 24px;
    margin: 0.5em 0;
`;

const FormTitle = styled(H2)`
    text-align: center;
`;

const Row = styled.div`
    display: block;
    margin: 0.5em;
    box-sizing: border-box;
    font-size: 0;
`;

const Cell = styled.div`
    display: inline-block;
    width: 50%;
    font-size: 0;
    height: 100%;
    vertical-align: middle;

    @media screen and (max-width: 480px) {
        display: block;
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width: 320px) {
        display: block;
        width: 100%;
    }
`;

const Input = styled.input`
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 3px 10px;
    width: 100%;
    margin: auto 0;

    &[disabled] {
        background-image: linear-gradient(45deg, #ffffff99 25%, #94ebd899 25%, #94ebd899 50%, #ffffff99 50%, #ffffff99 75%, #94ebd899 75%, #94ebd899 100%);
        background-size: 60px 60px;
        background-color: #94ebd8;
        cursor: not-allowed;
        opacity: 0.7;
    }
`;

const Label = styled.label`
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 3px 10px;
    width: 100%;
    margin: auto 0;
`;

const ButtonSection = styled.section`
    display: flex;
    margin: 0.5em;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width: 480px) {
        display: block;
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
    background-color: #000000;
    border: 5px solid #FFFFFF;
    border-radius: 10px;
    transition: all 0.5s;

    &:hover {
        background-color: #5E5E5E;
    }

    &[disabled] {
        color: #0A0A0A;
        background-image: linear-gradient(45deg, #ffffff 25%, #E30000 25%, #E30000 50%, #ffffff 50%, #ffffff 75%, #E30000 75%, #E30000 100%);
        background-size: 60px 60px;
        background-color: #999999;
        cursor: not-allowed;
        opacity: 0.7;
    }

    @media screen and (max-width: 640px) {
        display: block;
        width: 100%;
        margin-bottom: 0.5em;
    }
`;

const FormContainer = props => {
    return (
        <StyledFormContainer>
            <BlockSection>
                <FormTitle>Form</FormTitle>
            </BlockSection>
            <BlockSection>
                <Cell>
                    <Row>
                        <Cell>
                            <Label htmlFor='input'>Enter string or number:</Label>
                        </Cell>
                        <Cell>
                            <Input 
                                required
                                id='input' 
                                value={props.inputValue} 
                                placeholder='Enter string or number' 
                                type='input' 
                                onChange={(e) => props.handleChangeInputValue(e.target.value)} 
                                >
                            </Input>
                        </Cell>
                    </Row>
                </Cell>
                <Cell>
                    <Row>
                        <Cell>
                            <Label htmlFor='case'>Case sensitive:</Label>
                        </Cell>
                        <Cell>
                            <Input 
                                required
                                id='case' 
                                checked={props.checkboxValue} 
                                type='checkbox'
                                onChange={(e) => props.handleChangeCheckboxValue(e.target.value)} 
                                disabled={isNaN(props.inputValue.trim()) && props.inputValue.trim() != '' ? false : true}
                                >
                            </Input>
                        </Cell>
                    </Row>
                </Cell>
            </BlockSection>
            <ButtonSection>
                <Button 
                    onClick={e => props.handleFilterByLengthClick(e)} 
                    disabled={parseInt(props.inputValue.trim()) == props.inputValue ? false : true}
                    >Filter by length</Button>
                <Button
                    onClick={e => props.handleFilterBySubstringClick(e)} 
                    disabled={isNaN(props.inputValue.trim()) && props.inputValue.trim() != '' ? false : true}
                    >Filter by substring</Button>
            </ButtonSection>
        </StyledFormContainer>
    )
};

export { FormContainer };