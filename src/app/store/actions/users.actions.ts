import {Action} from '@ngrx/store';
import {User} from 'src/app/models/user.model';

export enum UsersActionType {
  LoadUsers = '[Users] Load Users',
  LoadUsers_Fail = '[Users] Load Users Fail',
  LoadUsers_Success = '[Users] Load Users Success',
}

export class LoadUsers implements Action {
  readonly type = UsersActionType.LoadUsers;
}

export class LoadUsersFail implements Action {
  readonly type = UsersActionType.LoadUsers_Fail;
  constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionType.LoadUsers_Success;
  constructor(public users: User[]) {}
}

export type UsersActions = LoadUsers | LoadUsersFail | LoadUsersSuccess;
