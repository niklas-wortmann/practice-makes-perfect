import { css } from "@emotion/core";
import React from "react";
import githubSvg from "../assets/github.svg";
import browserSvg from "../assets/browser.svg";

const linksContainer = css`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #f80090;
`;

const linkContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

const browserIconStyle = css`
    height: 45px;
    padding-right: 55px;
    width: 45px;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(${browserSvg});
`;

const linkStyles = css`
  color: #f80090 !important;
  text-decoration-color: #f80090 !important;
`;

export const Links = () => (
    <div css={linksContainer}>
        <div css={linkContainer} style={{marginBottom: '1em'}}>
            <div css={browserIconStyle}></div>
            <a href="https://rxjs-practice-makes-perfect.dev" target="_blank" css={linkStyles}
            className="link">https://rxjs-practice-makes-perfect.dev</a>
        </div>
        <div css={linkContainer}>
            <div css={githubIconStyle}></div>
            <a href="http://bit.ly/practice-makes-perfect-repo" target="_blank" css={linkStyles}
                className="link">http://bit.ly/practice-makes-perfect-repo</a>
        </div>
    </div>
);
