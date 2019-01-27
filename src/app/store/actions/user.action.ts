import {Action} from '@ngrx/store';
import {User} from 'src/app/models/user.model';

export enum UserActionType {
  LoadUser = '[User] Load User',
  LoadUser_Fail = '[User] Load User Fail',
  LoadUser_Success = '[User] Load User Success',
}

export class LoadUser implements Action {
  readonly type = UserActionType.LoadUser;
  constructor(public id: string) {}
}

export class LoadUserFail implements Action {
  readonly type = UserActionType.LoadUser_Fail;
  constructor(public payload: any) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionType.LoadUser_Success;
  constructor(public user: User) {}
}

export type UserActions = LoadUser | LoadUserFail | LoadUserSuccess;
