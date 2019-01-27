import {Injectable} from '@angular/core';
import {Actions, ofType, Effect} from '@ngrx/effects';
import * as userActions from '../actions';
import {of} from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';
import {UserService} from 'src/app/services/user.service';
import {LoadUser} from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(userActions.UserActionType.LoadUser),
    switchMap((action: LoadUser) => {
      return this.userService.geUserById(action.id).pipe(
        map(user => new userActions.LoadUserSuccess(user)),
        catchError(error => of(new userActions.LoadUserFail(error))),
      );
    }),
  );
}
