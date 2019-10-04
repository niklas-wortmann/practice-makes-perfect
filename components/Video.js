/* eslint-disable */

import React from "react";

export const Video = ({ name }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
        <video
          style="max-height: 70vh;"
          controls
          muted
          src="//localhost:8008/${name}"
        />
      `,
    }}
  ></div>
);
