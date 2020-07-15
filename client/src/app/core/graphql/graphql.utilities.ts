import {Observable, of, throwError} from 'rxjs';

export function extract(body: any, name: string): Observable<any> {
    if (body.data && body.data[name]) return of(body.data[name]);
    if (body.errors) throwError(body.errors);
    else throwError('Unknown Error');
}
