import { css } from "@emotion/core";
import React from "react";

import twitterSvg from './../assets/twitter.svg';

const footerContainerStyles = css`
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    alignItems: center;
    font-size: 30px;
    height: 40px;
`;

const iconStyles = css`
    height: 35px;
    padding-right: 45px;
    width: 35px;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(${twitterSvg});
`

const linkStyles = css`
    color: white;
    text-decoration: none;
    :hover {
        color: #00acee;
    }
`

export const Footer = (props) => (
    <div css={footerContainerStyles}>
        <div css={iconStyles}></div>
        <a href="https://twitter.com/niklas_wortmann" target="_blank" css={linkStyles}>@niklas_wortmann</a>
    </div>
);