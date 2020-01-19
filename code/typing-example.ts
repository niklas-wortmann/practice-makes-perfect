import { timer, of, concat } from "rxjs";
import { switchMap, reduce, filter } from 'rxjs/operators';

const isOnline = window.navigator.onLine;

const obs$ = timer(0, 1000).pipe(
    switchMap(() => isOnline ? of(1): of('2') )
)
/** 
 * RxJS <  7: obs$: Observable<{}>;
 * RxJS >= 7: obs$: Observable<string | number>;
 */

const concatObs$ = concat(of(1), of('a'), of(2), of(true), of(3), of([1, 2, 3]), of(4)); 
/** 
 * RxJS <  7: Observable<unknown>
 * RxJS >= 7: Observable<string | number | boolean | number[]>
 */ 

const source = of(1, 2, 3).pipe(reduce((a: any, v) => '' + v));
/** 
 * RxJS <  7: Observable<any>
 * RxJS >= 7: Observable<string>
 */ 

const filter$ = of(0, 1, 2).pipe(filter(Boolean));
/** 
 * RxJS <  7: Observable<unknown>
 * RxJS >= 7: Observable<number>
 */ 