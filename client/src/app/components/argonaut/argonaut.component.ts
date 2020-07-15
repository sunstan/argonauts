import {DeleteArgonaut, UpdateArgonaut} from '../../core/store/argonauts/argonauts.actions';
import {FormControl, Validators} from '@angular/forms';
import {Argonaut} from '../../api/argonaut/argonaut.entity';
import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {take} from 'rxjs/operators';

@Component({
    selector: 'app-argonaut',
    templateUrl: './argonaut.component.html',
})
export class ArgonautComponent {

    @Input() argonaut: Argonaut;

    public edit: boolean;
    public input = new FormControl('', Validators.required);

    constructor(private store: Store) {}


    public toogleEdit(): void {
        this.edit = !this.edit;
        !this.edit || this.input.patchValue(this.argonaut.name);
    }

    public updateArgonaut(): void {
        this.store.dispatch(new UpdateArgonaut(this.argonaut.id, this.input.value))
            .pipe(take(1))
            .subscribe()
            .add(() => this.edit = false)
    }

    public deleteArgonaut(): void {
        if (confirm('Voulez-vous vraiment supprimer ' + this.argonaut.name + '?'))
            this.store.dispatch(new DeleteArgonaut(this.argonaut.id));
    }
}
