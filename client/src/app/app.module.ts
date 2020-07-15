import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {ApiModule} from './api/api.module';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ArgonautComponent} from './components/argonaut/argonaut.component';
import {ArgonautsComponent} from './components/argonauts/argonauts.component';

@NgModule({
    imports: [
        ApiModule,
        CoreModule,
        BrowserModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        ArgonautComponent,
        ArgonautsComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
