/* eslint-disable */

import { css } from "@emotion/core";
import React from "react";
import { theme } from "../theme";

const containerStyles = css`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40% 20% 20% 20%;
  height: 50vh;
  width: 80vw;
`;

const cellStyles = css`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-template-columns: 10vh auto;
  grid-template-rows: 100%;
`;

const iconStyles = css`
  align-items: center;
  display: flex;
  grid-column-start: 1;
  grid-column-end: 2;
  justify-content: center;
  img {
    height: 5vh;
  }
`;

const textStyles = css`
  align-items: center;
  display: flex;
  font-size: 5vh;
  font-weight: 700;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const siteStyles = css`
  font-size: 10vh;
  font-weight: 900;
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

export const End = () => (
  <div css={containerStyles}>
    <div css={cellStyles}>
      <div css={[textStyles, siteStyles]}><span css={primaryStyles}>https://</span><span css={secondaryStyles}>rxjs.tools</span></div>
    </div>
    <div css={cellStyles}>
      <div css={[iconStyles]}><img src="//localhost:8008/assets/twitter.svg" /></div>
      <div css={[textStyles]}>@ncjamieson</div>
    </div>
    <div css={cellStyles}>
      <div css={[iconStyles]}><img src="//localhost:8008/assets/github.svg" /></div>
      <div css={[textStyles]}><span css={urlStyles}>https://github.com/</span>cartant</div>
    </div>
    <div css={cellStyles}>
      <div css={[iconStyles]}><img src="//localhost:8008/assets/medium.svg" /></div>
      <div css={[textStyles]}><span css={urlStyles}>https://medium.com/</span>@cartant</div>
    </div>
  </div>
);