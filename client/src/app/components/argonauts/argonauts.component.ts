import {Component, OnDestroy} from '@angular/core';
import {Argonaut} from '../../api/argonaut/argonaut.entity';
import {Store} from '@ngxs/store';
import {GetArgonauts} from '../../core/store/argonauts/argonauts.actions';
import {switchMap, takeUntil} from 'rxjs/operators';
import {ArgonautsState} from '../../core/store/argonauts/argonauts.state';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-argonauts',
    templateUrl: './argonauts.component.html',
})
export class ArgonautsComponent implements OnDestroy {

    public sorted: boolean;
    public argonauts: Argonaut[];

    private destroy$ = new Subject();

    constructor(private store: Store) {
        store.dispatch(new GetArgonauts())
            .pipe(
                switchMap(() => store.select(ArgonautsState)),
                takeUntil(this.destroy$)
            ).subscribe(
                (argonauts: Argonaut[]) => this.argonauts = argonauts
            );
    }

    sort(): Argonaut[] {
        if (!this.argonauts) return;

        return this.sorted
            ? this.argonauts.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            : this.argonauts.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)).reverse();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
