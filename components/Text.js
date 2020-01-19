import { css } from "@emotion/core";
import React from "react";

const containerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 80vw; 
    height: 80vh; 
    text-align: center;
`;

export const Text = (props) => (
    <div css={containerStyle}>
        <h1>{props.children}</h1>
    </div>
)