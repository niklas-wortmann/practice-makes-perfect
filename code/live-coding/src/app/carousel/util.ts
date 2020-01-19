import {pipe} from 'rxjs';
import {tap} from 'rxjs/operators';

export const preventEventPropagation = pipe(
  tap((e: any) => {
    e.preventDefault();
    e.stopPropagation();
  })
);
