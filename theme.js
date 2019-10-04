import { Global, css } from "@emotion/core";
import { nightOwl } from "code-surfer";
import { themes } from "mdx-deck";
import React from "react";

// Purple background = #a457d4
// RxJS pink = #f80090
// RxJS purple = #57008e

export const theme = {
  colors: {
    background: "black",
    primary: "#f80090",
    secondary: "#57008e",
    tertiary: "black",
    text: "white"
  },
  ...nightOwl
};
console.log({ theme, dark: themes.dark });

export const Styles = () => (
  <Global styles={css`
    .primary {
      color: ${theme.colors.primary};
    }
  `} />
);