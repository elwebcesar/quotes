import React, { useState } from 'react';
import styled from '@emotion/styled';

// styled components
const sizes = {
    break: '600px',
}

const InfoContent = styled.aside`
    position: absolute;
    position: relative;
    display: flex;
    left: calc(100% - 70px);
    bottom: 80px;
    padding: 6px 20px 6px 6px;
    width: 245px;
    background-color: #921010;
    border-radius: 40px 0 0 40px;
    transition: left .3s ease;

    &.active {
        left: calc(100% - 245px);
    }

    & button {
        font-size: 36px;
        font-weight: 900;
        margin-right: 13px;
        padding: 6px 20px 4px 20px;
        cursor: pointer;
        color: #921010;
        background-color: #FFF;
        border: none;
        border-radius: 50px;
        transition: all .2s ease;

        &:hover, &:focus {
            color: #FFF;
            background-color: #570707;
        }
    }

    & a {
        display: flex;
        opacity: 0.7;
        margin: 0 7px;
        transition: opacity .2s ease;

        &:hover, &:focus {
            opacity: 1;
        }
    }
`;

const About = ({images}) => {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive); 
    };

    const icoFigma = images.find(image => image.name === "Figma");
    const icoGitHub = images.find(image => image.name === "GitHub");
    const icoApi = images.find(image => image.name === "Api");
    const IcoLinkedin = images.find(image => image.name === "Linkedin");

    return ( 
        <InfoContent className={!isActive ? "active" : null}>
            <button
            type = "button"
            onClick = {ToggleClass}
            >
            i</button>
            <a rel="noopener noreferrer" href="https://www.figma.com/proto/P2JASV55Pj9GfYaOQNnsZi/Quotes?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1" title={icoFigma.title} target="_blank">
                <img src={icoFigma.url} alt={icoFigma.title} />
            </a>
            <a rel="noopener noreferrer" href="https://github.com/elwebcesar/quotes" title={icoGitHub.title} target="_blank">
                <img src={icoGitHub.url} alt={icoGitHub.title} />
            </a>
            <a rel="noopener noreferrer" href="https://breakingbadapi.com/" title={icoApi.title} target="_blank">
                <img src={icoApi.url} alt={icoApi.title} />
            </a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/c%C3%A9sar-fern%C3%A1ndez-797436207/" title={IcoLinkedin.title} target="_blank">
                <img src={IcoLinkedin.url} alt={IcoLinkedin.title} />
            </a>
        </InfoContent>
     );
}
 
export default About;
