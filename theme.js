import { Global, css } from "@emotion/core";
import { themes } from "mdx-deck";
import React from "react";
import {
  vsDark
} from "@code-surfer/themes";


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
  }
};

export const vsDarkReal = {...vsDark }
// , ...{ 
//   styles: {
//     CodeSurfer: {
//       code: {
//         backgroundColor: "#000"
//       },
//       pre: {
//         backgroundColor: "#000"
//       },
//       title: {
//         backgroundColor: "#000"
//       }
//     }
//   }
// }};

console.log(vsDarkReal.styles);


export const Styles = () => (
  <Global styles={css`
    .primary {
      color: ${theme.colors.primary};
    }
  `} />
);