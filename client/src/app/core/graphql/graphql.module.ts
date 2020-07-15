import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../../../environments/environment';
import {HttpClientModule} from '@angular/common/http';

const uri = environment.host + 'graphql';

@NgModule({
    exports: [
        ApolloModule,
        HttpLinkModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => ({
                link: httpLink.create({uri}),
                cache: new InMemoryCache(),
            }),
            deps: [HttpLink],
        },
    ],
})
export class GraphqlModule {
}
