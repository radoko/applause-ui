import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MatcherEffect {

  constructor(private actions$: Actions) {
  }

  // @Effect()
  // loadUser$ = this.actions$.ofType(LOAD_CURRENT_USER).pipe(
    // tap(() => this.pleaseWaitService.show()),
    // switchMap(() => this.http.get<fromModel.User>('user').pipe(
    //   map((user: fromModel.User) => new SetUserWithPermissions(user)),
    //   tap(() => this.pleaseWaitService.hide())
    //   )
    // )
  // )
}
