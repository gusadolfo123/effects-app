import {Injectable} from '@angular/core';
import {Actions, ofType, Effect} from '@ngrx/effects';
import * as usersActions from '../actions';
import {of} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import {UserService} from 'src/app/services/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(usersActions.UsersActionType.LoadUsers),
    switchMap(() => {
      return this.userService.getUsers().pipe(
        map(users => new usersActions.LoadUsersSuccess(users)),
        catchError(error => of(new usersActions.LoadUsersFail(error))),
      );
    }),
  );
}
