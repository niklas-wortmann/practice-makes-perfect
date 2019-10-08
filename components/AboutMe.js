import { css } from "@emotion/core";
import { TextSplit } from "./TextSplit";
import React from "react";

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
    margin-right: 15px;
`;

export const AboutMe = (props) => (
    <TextSplit image="//localhost:8008/assets/about-me-min.jpg">
        <h3>Jan-Niklas Wortmann</h3>
        <ul css={listContainerStyles} >
            <li>
                <div css={listItemStyles} >
                    <span css={marginbasicstyles} >🖥</span>
                    <span>Developer</span>
                </div>
            </li>
            <li>
                <div css={listItemStyles}>
                    <img src="//localhost:8008/assets/rxjs-logo.svg" css={imagestyles} />
                    <span>Core Team Member</span>
                </div>
            </li>
            <li>
                <div css={listItemStyles}>
                    <img src="//localhost:8008/assets/angular-logo.svg" css={imagestyles} />
                    <span>Meetup Organizer</span>
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
