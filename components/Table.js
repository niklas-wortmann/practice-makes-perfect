import { css } from "@emotion/core";
import React from "react";
import { theme } from "../theme";


const containerStyle = css`
    display:flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

const rowStyle = css`
    display: flex;
    flex-wrap: wrap;
    width: 100%; 
    justify-content: space-between;
    margin-top: 0.2em;
    padding-left: 1em;
    padding-right: 1em;
`;

const headlineStyle = css`
    display: flex;
    flex-wrap: wrap;
    width: 100%; 
    justify-content: space-around;
`;

const spanStyle = css`
    flex: 1;
`;

const primaryStyles = css`
  color: ${theme.colors.primary};
`;

export const Table = (props) => (
    <div css={containerStyle}>
        <div css={headlineStyle}>
            <h2 css={primaryStyles}> {props.titleLeft}</h2>
            <h2 css={primaryStyles}> {props.titleRight}</h2>
        </div>
        {props.data.map((item, index) =>
            <div css={rowStyle} key={index}>
                <span css={spanStyle}>{item[0]}</span>
                <span css={spanStyle} style={{textAlign: item.length >= 3 ? "center": "right"}}>{item[1]}</span>
                {item.length >= 3 &&
                    <span css={spanStyle} style={{textAlign: "right"}}>{item[2]}</span>
                 }
            </div>
        )}
    </div>
);