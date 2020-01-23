import { css } from "@emotion/core";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import twitterSvg from './../assets/twitter.svg';


const footerContainerStyles = css`
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    font-size: 30px;
    height: 40px;
    width: 100%;
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
    padding-right: 35px;
    :hover {
        color: #00acee;
    }
`

const mailToStyles = css`
    color: white;
    text-decoration: none;
    padding-left: 20px;
    :hover {
        color: #00acee;
    }`;

export const Footer = (props) => (
    <div css={footerContainerStyles}>
        <div css={iconStyles}></div>
        <a href="https://twitter.com/niklas_wortmann" target="_blank" css={linkStyles}>@niklas_wortmann</a>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:jan@niklas-wortmann.com" css={mailToStyles}>jan@niklas-wortmann.com</a> 
    </div>
);