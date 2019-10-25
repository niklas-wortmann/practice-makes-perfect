import {css} from "@emotion/core";
import React from 'react'
import flowPng from './../assets/cycle-flow.png';

const imageContainerStyle = css`
    width: 80%;
    height: 80%;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(${flowPng});
`;


export const CycleFlowDiagram = () => (
    <div css={imageContainerStyle} role="img" aria-label="tag cloud of rxjs terms">
    </div>
);