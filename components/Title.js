/* eslint-disable */

import { css } from "@emotion/core";
import React from "react";
import { theme } from "../theme";


const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const headlineStyles = css`
  margin-top: 0;
`;

const sublineStyles = css`
  margin: 0;
`;

export const Title = () => (
  <div css={containerStyles}>
    <h1 css={headlineStyles}>Practice <span className="primary">makes</span> perfect</h1>
    <h2 css={sublineStyles}>when it comes to <span className="primary">RxJS</span></h2>
  </div>
);