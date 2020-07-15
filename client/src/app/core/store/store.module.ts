import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {ArgonautsState} from './argonauts/argonauts.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
    imports: [
        NgxsModule.forRoot([ArgonautsState]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
    ],
})
export class StoreModule {
}
