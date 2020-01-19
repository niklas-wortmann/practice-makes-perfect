import { css } from "@emotion/core";
import React from "react";

const style = {
    display: "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row",
    "width": "100%",
    "height": "100%",    
}

const containerStyles = {...style};

const containerStylesReverse = {...style, ...{"flexDirection": "row-reverse"}};

const flexItemStyle = css`
    flex: 0 0 50%;
    align-self: stretch;
`;

const imageStyles = css`
    width: 50%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
`;

const childrenContainerStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const TextSplit = (props) => (
    <div css={!props.reverse ? containerStyles : containerStylesReverse}>
      <div css={{...flexItemStyle, ...childrenContainerStyles}}>{props.children}</div>
      <div css={{...flexItemStyle, ...imageStyles}} style={{"backgroundImage": `url(${props.image})`}}></div>
    </div> 
  );