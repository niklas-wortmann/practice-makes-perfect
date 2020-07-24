import { css } from "@emotion/core";
import { TextSplit } from "./TextSplit";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch } from '@fortawesome/free-brands-svg-icons';

import meJpg from './../assets/about-me-min.jpg';
import rxjsSvg from './../assets/rxjs-logo.svg';
import angularSvg from './../assets/angular-logo.svg';

const listItemStyles = css`
    display: flex;
    align-items: inherit;
    height: 60px
`

const listContainerStyles = css`
    list-style: none; 
    margin-top: 2em;
`

const marginbasicstyles = {
    "marginRight": "5px"
}


const imagewidth = {
    width: "1.2em"
}  

const imagestyles = {...imagewidth, ...marginbasicstyles};

const steakStyles = css`
    margin-right: 8px;
`;

export const AboutMe = (props) => (
    <TextSplit image={meJpg}>
        <h3>Jan-Niklas Wortmann</h3>
        <ul css={listContainerStyles} >
            <li>
                <div css={listItemStyles} >
                    <span css={marginbasicstyles} >💻</span>
                    <span css={{marginLeft: '6px'}}>Consultant @ EvoraIT</span>
                </div>
            </li>
            <li>
                <div css={listItemStyles}>
                    <img src={rxjsSvg} css={imagestyles} />
                    <span css={{marginLeft: '10px'}}>Core Team Member</span>
                </div>
            </li>
            <li>
                <div css={{ listItemStyles, ...{display: 'flex', alignItems: 'center'} }} >
                    <FontAwesomeIcon icon={faTwitch} style={{ marginbasicstyles, ...{ width: '64px' } }}/>
                    <span css={{marginLeft: '6px'}}>CraftprogrammTV</span>
                </div>
            </li>
            <li>
                <div css={listItemStyles}>
                    <img src={angularSvg} css={imagestyles} />
                    <span css={{marginLeft: '10px'}}>Meetup Organizer</span>
                </div>
            </li>
            <li>
                <div css={listItemStyles}>
                    <span css={steakStyles}>🥩</span>
                    <span css={marginbasicstyles}>and</span>
                    <span css={marginbasicstyles}>🥃</span>
                    <span>lover</span>
                </div>
            </li>
        </ul>
    </TextSplit>
);
