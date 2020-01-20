import { css } from "@emotion/core";
import { TextSplit } from "./TextSplit";
import React from "react";
import { Styles } from "./../theme";

import rxjsLiveSvg from './../assets/rxjs-live-london.svg';

const subLineStyles = css`
  font-size: 1em;
  margin-block-end: 1em;
`;

const linkStyles = css`
    text-decoration: none;
    color: white;
    font-size: 1em;
    margin-block-end: 1em;  
`;

const textContainer = css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RxJSLive = () => (
    <TextSplit image={rxjsLiveSvg}>
        <Styles />
        <div css={textContainer}>
            <h3>RxJS Live in London</h3>
            <span css={subLineStyles} className={"primary"}>19.03 - 20.03.2020</span>
            <a css={linkStyles} href={"https://www.rxjs.live/london"}>https://www.rxjs.live/london</a>
        </div>
    </TextSplit>
);
