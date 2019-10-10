import React from "react";
import {Helmet} from "react-helmet";



export const WebComponent = () => (
<div>
    <Helmet>
        <script src="//localhost:8008/assets/elements.js"></script>
    </Helmet>
    <rxjs-slider></rxjs-slider>
</div>
);