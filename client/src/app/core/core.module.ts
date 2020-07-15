import {NgModule} from '@angular/core';
import {StoreModule} from './store/store.module';
import {GraphqlModule} from './graphql/graphql.module';

@NgModule({
    imports: [
        StoreModule,
        GraphqlModule,
    ]
})
export class CoreModule {
}
