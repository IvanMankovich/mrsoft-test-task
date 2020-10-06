import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const LoadingPadding = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #FFFFFF99;
    backdrop-filter: blur(5px);
    z-index: 3;
`;

const LoadingBody = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-sizing: border-box;
    background-image: linear-gradient(#FFFFFF, #000000);
    animation: ${rotate} 4s linear infinite;
`;

const Loading = props => {
    return (
        <LoadingPadding>
            <LoadingBody>
            </LoadingBody>
        </LoadingPadding>
    )
};

export { Loading };