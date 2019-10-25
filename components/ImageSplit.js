import { css } from "@emotion/core";
import React from "react";

const style = {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "row",
    "width": "100%",
    "height": "100%",    
}

const containerStyles = {...style};

const containerStylesReverse = {...style, ...{"flex-direction": "row-reverse"}};

const flexItemStyle = css`
    flex: 0 0 50%;
    align-self: stretch;
`;

const headlineStyle = css`
    justify-self: center;
    align-self: center;
    text-align: center;
    padding: 20px;
`

export const ImageSplit = (props) => (
    <div css={!props.reverse ? containerStyles : containerStylesReverse}>
      <h1 css={{...flexItemStyle, ...headlineStyle}}>{props.title}</h1>
      <img css={flexItemStyle} src={props.image} alt={props.alt}/>
    </div> 
  );