import { css } from "@emotion/core";
import React from "react";


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
    color: #00acee;
    padding-right: 20px;
    font-size: 35px;
    display: flex;
    align-items: center;
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
        <i css={iconStyles} className="fab fa-twitter"></i>
        <a href="https://twitter.com/niklas_wortmann" target="_blank" css={linkStyles}>@niklas_wortmann</a>
    </div>
);