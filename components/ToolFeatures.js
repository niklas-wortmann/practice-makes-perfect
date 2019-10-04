/* eslint-disable */

import { css } from "@emotion/core";
import React from "react";
import { theme } from "../theme";

const containerStyles = css`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  height: 60vh;
  width: 90vw;
`;

const textStyles = css`
  font-size: 7vh;
  font-weight: 900;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const emojiStyles = css`
  font-size: 15vh;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`

const oneStyles = css`
  grid-row-start: 1;
  grid-row-end: 2;
`;

const twoStyles = css`
  grid-row-start: 2;
  grid-row-end: 3;
`;

const threeStyles = css`
  grid-row-start: 3;
  grid-row-end: 4;
`;

const fourStyles = css`
  grid-row-start: 4;
  grid-row-end: 5;
`;

const fiveStyles = css`
  grid-row-start: 5;
  grid-row-end: 6;
`;

const primaryStyles = css`
  color: ${theme.colors.primary};
`;

const secondaryStyles = css`
  color: ${theme.colors.secondary};
`;

const tertiaryStyles = css`
  color: ${theme.colors.tertiary};
`;

export const ToolFeatures = () => (
  <div css={containerStyles}>
    <div css={[emojiStyles]}>&#x1F60D;</div>
    <div css={[oneStyles, textStyles]}>No dependencies</div>
    <div css={[twoStyles, textStyles]}>No overhead</div>
    <div css={[threeStyles, textStyles]}><div><span css={secondaryStyles}>Visual</span> pipelines</div></div>
    <div css={[fourStyles, textStyles]}>Discoverable features</div>
    <div css={[fiveStyles, textStyles]}><span css={primaryStyles}>Queries</span></div>
  </div>
);