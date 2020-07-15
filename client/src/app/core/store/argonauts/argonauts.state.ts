import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {Argonaut} from '../../../api/argonaut/argonaut.entity';
import {ArgonautService} from '../../../api/argonaut/argonaut.service';
import * as actions from './argonauts.actions';
import {tap} from 'rxjs/operators';

@Injectable()
@State<Argonaut[]>({name: 'argonauts', defaults: []})
export class ArgonautsState {

    constructor(private argonautService: ArgonautService) {
    }

    @Action(actions.GetArgonauts)
    get(ctx: StateContext<Argonaut[]>) {
        if (ctx.getState().length > 0) return;
        return this.argonautService.argonauts().pipe(
            tap((argonauts: Argonaut[]) => ctx.setState(argonauts))
        );
    }

    @Action(actions.AddArgonaut)
    add(ctx: StateContext<Argonaut[]>, {name}: actions.AddArgonaut) {
        return this.argonautService.addArgonaut(name).pipe(
            tap((argonaut: Argonaut) => ctx.setState([argonaut, ...ctx.getState()]))
        );
    }

    @Action(actions.UpdateArgonaut)
    update(ctx: StateContext<Argonaut[]>, {id, name}: actions.UpdateArgonaut) {
        return this.argonautService.updateArgonaut(id, name).pipe(
            tap((argonaut: Argonaut) => ctx.setState([...ctx.getState().map(a => a.id === id
                ? {...a, ...argonaut}
                : a
            )]))
        );
    }

    @Action(actions.DeleteArgonaut)
    delete(ctx: StateContext<Argonaut[]>, {id}: actions.DeleteArgonaut) {
        return this.argonautService.deleteArgonaut(id).pipe(
            tap(() => ctx.setState([...ctx.getState().filter(a => a.id !== id)]))
        );
    }
}
