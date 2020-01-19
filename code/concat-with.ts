import { concat, of } from 'rxjs';

const hello$ = of('hello');
const world$ = of('world');

concat(hello$, world$).subscribe(console.log);
// hello
// world

import { concatWith } from 'rxjs/operators';

hello$.pipe(
    concatWith(world$)
).subscribe(console.log);
// hello
// world

