import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    background-color: #111111;
    color: #FFFFFF;
    text-align: center;
`;

const ProjectDescription = styled.p`
    font-size: 14px;
`;

const Link = styled.a`
    color: #AAAAAA;
    text-decoration: none;
`;

const Span = styled.span`
    color: #AAAAAA;
    cursor: pointer; 
`;

const Footer = props => {
    return (
        <FooterContainer>
            <ProjectDescription>This project uses <Link href='https://reactjs.org/'>React</Link>, <Link href='https://styled-components.com/'>styled-components</Link> and <Link href='heroku.com'>Heroku</Link>.<br />
            This project was created as <Span onClick={e => props.handleClickOpenModal(e)}>test task</Span> to Web-developer position at <Link href='https://www.mrsoft.by/'>mrsoft.by</Link>.<br />
            <Link href='https://github.com/IvanMankovich/mrsoft-test-task'>Client side code</Link><br />
            <Link href='https://github.com/IvanMankovich/mrsoft-test-task-api'>API code</Link>
            </ProjectDescription>
        </FooterContainer>
    )
};

export { Footer };