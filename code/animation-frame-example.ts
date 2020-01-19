import { map, takeWhile, endWith } from 'rxjs/operators';
import { animationFrames } from 'rxjs';

// Log the elapsed milliseconds at each animation frame.
animationFrames().subscribe(elapsed => console.log(elapsed));

export function tween(start: number, end: number, duration: number) {
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

// Setup a div for us to move around
const div = document.createElement('div');
document.body.appendChild(div);
div.style.position = 'absolute';
div.style.width = '40px';
div.style.height = '40px';
div.style.backgroundColor = 'lime';
div.style.transform = 'translate3d(10px, 0, 0)';

tween(10, 400, 4000).subscribe(x => {
    div.style.transform = `translate3d(${x}px, 0, 0)`;
});