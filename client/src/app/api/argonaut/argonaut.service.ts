import {Injectable} from '@angular/core';
import {extract} from '../../core/graphql/graphql.utilities';
import {catchError, switchMap} from 'rxjs/operators';
import {Argonaut} from './argonaut.entity';
import {Apollo} from 'apollo-angular';
import {Observable, of} from 'rxjs';
import gql from 'graphql-tag';

@Injectable()
export class ArgonautService {

    constructor(private apollo: Apollo) {
    }

    argonauts(): Observable<Argonaut[]> {
        return this.apollo.query<any>({
            query: gql`query {
                argonauts {
                    id
                    name
                }
            }`,
        }).pipe(
            switchMap(body => extract(body, 'argonauts')),
            catchError(err => of(err)),
        );
    }

    addArgonaut(name: string): Observable<Argonaut> {
        return this.apollo.mutate<any>({
            variables: {name},
            mutation: gql`mutation addArgonaut($name: String!) {
                addArgonaut(name: $name) {
                    id
                    name
                }
            }`,
        }).pipe(
            switchMap(body => extract(body, 'addArgonaut')),
            catchError(err => of(err)),
        );
    }

    updateArgonaut(id: number, name: string): Observable<Argonaut> {
        return this.apollo.mutate<any>({
            variables: {id, name},
            mutation: gql`mutation addArgonaut($id: Float!, $name: String!) {
                updateArgonaut(id: $id, name: $name) {
                    id
                    name
                }
            }`,
        }).pipe(
            switchMap(body => extract(body, 'updateArgonaut')),
            catchError(err => of(err)),
        );
    }

    deleteArgonaut(id: number): Observable<boolean> {
        return this.apollo.mutate<any>({
            variables: {id},
            mutation: gql`mutation deleteArgonaut($id: Float!) {
                deleteArgonaut(id: $id)
            }`,
        }).pipe(
            switchMap(body => extract(body, 'updateArgonaut')),
            catchError(err => of(err)),
        );
    }
}
