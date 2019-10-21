import React from "react";
import {Helmet} from "react-helmet";
import { css } from "@emotion/core";

const containerStyles = css`
    display: flex;
    width: 80vw;
    height: 80vh;
    justify-content: center;
    align-items: center; 
`;

const webcomponentStyles = css`
    width: 100%;
    height: 100%;
    display: block;
`;

export const WebComponent = () => (
<div css={containerStyles}>
    <Helmet>
        <script src='./static/elements.js'></script>
    </Helmet>
    <rxjs-slider css={webcomponentStyles}></rxjs-slider>
</div>
);