/* eslint-disable */

import { css } from "@emotion/core";
import React from "react";
import { theme } from "../theme";

const containerStyles = css`
  display: flex
  flex-direction: column;
  height: 90%;
  width: 90vw;
`;

const cellStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  height: 80%;
`;

const quoteStyles = css`
  font-size: 12.5vh;
  font-weight: 900;
`;

const attributionStyles = css`
  display: flex;
  font-size: 7.5vh;
  font-weight: 700;
  justify-content: flex-end;
  font-style: italic;
  font-family: cursive;
`;

const primaryStyles = css`
  color: ${theme.colors.primary};
`;

const spanStyles = css`
  line-height: 0.95em;
`;

export const Quote = () =>(
  <div css={containerStyles}>
    <div css={[cellStyles, quoteStyles]}>
      <span css={spanStyles}><span css={primaryStyles}> Observables </span> don't cause problems.</span> 
      <span css={spanStyles}>Establishing a <span css={primaryStyles}> reactive mindset </span>does!</span>
    </div>
    <div css={attributionStyles}>&mdash; Me</div>
  </div>
);