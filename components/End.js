import { css } from "@emotion/core";
import React from "react";
import { theme } from "../theme";
import {TextSplit} from "./TextSplit";
import githubSvg from './../assets/github.svg';
import devToSvg from './../assets/dev-dot-to.svg';
import thankYou from './../assets/thank-you.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const containerStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100%;
  justify-content: center;

  * {
    display: flex;
    align-items: center;
  }
`;

const linkContainer = css`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column !important;
`;

const urlStyles = css`
  color: ${theme.colors.tertiary};
`;

const primaryStyles = css`
  color: ${theme.colors.primary};
`;

const secondaryStyles = css`
  color: ${theme.colors.secondary};
`;

const githubIconStyle = css`
    height: 45px;
    padding-right: 55px;
    width: 45px;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(${githubSvg});
`;

const devToIconStyle = css`
    height: 45px;
    padding-right: 55px;
    width: 45px;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(${devToSvg});
`;

const linkStyles = css`
    color: white;
    text-decoration: none;
    :hover {
        color: #00acee;
    }
`

export const End = () => (
  <TextSplit image={thankYou}>
    <div css={containerStyles}>
      <h1 css={primaryStyles} style={{marginTop: 0}}>Thank you!</h1>
      <div css={linkContainer}>
        <div>
          <FontAwesomeIcon icon={faTwitter} style={{fontSize: '35px', marginRight: "20px"}}/>
          <a href="https://twitter.com/niklas_wortmann" target="_blank" css={linkStyles}>@niklas_wortmann</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faWifi} style={{fontSize: '35px', marginRight: "20px"}}/>
          <a href="https://niklas-wortmann.com" target="_blank" css={linkStyles}>https://niklas-wortmann.com</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} style={{fontSize: '35px', marginRight: "20px"}}/>
          <a href="mailto:jan@niklas-wortmann.com" css={linkStyles}>jan@niklas-wortmann.com</a> 
        </div>
        <div>
          <div css={githubIconStyle}></div>
          <a href="https://github.com/JWO719" target="_blank" css={linkStyles}>JWO719</a>
        </div>
      </div>
    </div>
  </TextSplit>
);