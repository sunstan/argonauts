import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {AddArgonaut} from '../../core/store/argonauts/argonauts.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    public input = new FormControl('', Validators.required);

    constructor(private store: Store) {}

    public addArgonaut(): void {
        this.store.dispatch(new AddArgonaut(this.input.value));
        this.input.patchValue('');
    }
}
