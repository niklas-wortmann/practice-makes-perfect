/* eslint-disable */

import { css } from "@emotion/core";
import React from "react";
import { theme } from "../theme";

const containerStyles = css`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  height: 80vh;
  width: 80vw;
`;

const textStyles = css`
  font-size: 15vh;
  font-weight: 900;
`;

const emojiStyles = css`
  font-size: 15vh;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const cssStyles = css`
  color: ${theme.colors.primary};
  display: flex;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const reactStyles = css`
  display: flex;
  justify-content: flex-end;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const angularStyles = css`
  color: ${theme.colors.secondary};
  display: flex;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 5;
`;

const eslintStyles = css`
  display: flex;
  justify-content: flex-end;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
`;

export const Others = () =>(
  <div css={containerStyles}>
    <div css={[emojiStyles]}>&#x1F92C;</div>
    <div css={[cssStyles, textStyles]}>CSS</div>
    <div css={[reactStyles, textStyles]}>React</div>
    <div css={[angularStyles, textStyles]}>Angular templates</div>
    <div css={[eslintStyles, textStyles]}>ESLint</div>
  </div>
);