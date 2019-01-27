import * as reducers from './reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  users: reducers.UsersState;
  user: reducers.UserState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  users: reducers.UsersReducer,
  user: reducers.UserReducer,
};
