import React, {Component} from 'react'
import { css } from "@emotion/core";
import {animationFrames} from 'rxjs';
import {map, takeWhile, endWith} from 'rxjs/operators';

function tween(start, end, duration) {
    const diff = end - start;
    return animationFrames().pipe(
        // Figure out what percentage of time has passed
        map(elapsed => elapsed / duration),
        // Take the vector while less than 100%
        takeWhile(v => v < 1),
        // Finish with 100%
        endWith(1),
        // Calculate the distance traveled between start and end
        map(v => v * diff + start)
    );
}

const divStyles = css`
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: lime;
    transform: translate3d(10px, 0, 0);
    top: 50%;
    left: 35%;
`;

export class AnimationFrameExample extends Component {

    componentDidMount(){
        const div = document.getElementById("animationFrameExample");

        tween(10, 400, 4000).subscribe(x => {
            div.style.transform = `translate3d(${x}px, 0, 0)`;
        });
    }

    render() {
        return  (
            <div css={divStyles} id="animationFrameExample"></div>
        )
    } 

}