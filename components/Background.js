/* eslint-disable */

import { css } from "@emotion/core";
import React from "react";

const containerStyles = css`
  display: grid;
  grid-template-columns: 33.3% auto 33.3%;
  grid-template-rows: 100%;
  height: 30vh;
  width: calc(30vh * 3);
`;

const cellStyles = css`
  align-items: center;
  display: flex;
  grid-row-start: 1;
  grid-row-end: 1;
  justify-content: center;
  img {
    height: 25vh;
  }
`;

const ngStyles = css`
  grid-column-start: 1;
  grid-column-end: 2;
`;

const ngRxStyles = css`
  grid-column-start: 2;
  grid-column-end: 3;
`;

const rxStyles = css`
  grid-column-start: 3;
  grid-column-end: 4;
`;

export const Background = () => (
  <div css={containerStyles}>
    <div css={[cellStyles, ngStyles]}>
      <img src="//localhost:8008/assets/angular.svg" />
    </div>
    <div css={[cellStyles, ngRxStyles]}>
      <img src="//localhost:8008/assets/ngrx.svg" />
    </div>
    <div css={[cellStyles, rxStyles]}>
      <img src="//localhost:8008/assets/rxjs.svg" />
    </div>
  </div>
);