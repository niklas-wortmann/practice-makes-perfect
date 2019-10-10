import React from "react";
import {Helmet} from "react-helmet";



export const WebComponent = () => (
<div style={{margin: "50px"}}>
    <Helmet>
        <script src="//localhost:8008/assets/elements.js"></script>
    </Helmet>
    <rxjs-slider></rxjs-slider>
</div>
);