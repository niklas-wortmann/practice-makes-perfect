/* eslint-disable */

import { css } from "@emotion/core";
import React from "react";
import { theme } from "../theme";

const containerStyles = css`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 85% 15%;
  height: 50vh;
  width: 80vw;
`;

const cellStyles = css`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const quoteStyles = css`
  font-size: 12.5vh;
  font-weight: 900;
`;

const attributionStyles = css`
  font-size: 7.5vh;
  font-weight: 700;
  justify-content: flex-end;
`;

const primaryStyles = css`
  color: ${theme.colors.primary};
`;

export const Quote = () =>(
  <div css={containerStyles}>
    <div css={[cellStyles, quoteStyles]}><div>RxJS is <span css={primaryStyles}>impossible</span> to debug!</div></div>
    <div css={[cellStyles, attributionStyles]}>&mdash; Some people</div>
  </div>
);