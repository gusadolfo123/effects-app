import {User} from 'src/app/models/user.model';
import * as fromUsers from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export function UsersReducer(state = initialState, action: fromUsers.UsersActions): UsersState {
  switch (action.type) {
    case fromUsers.UsersActionType.LoadUsers:
      return {...state, loading: true, error: null};
    case fromUsers.UsersActionType.LoadUsers_Success:
      return {...state, loaded: true, loading: false, users: [...action.users]};
    case fromUsers.UsersActionType.LoadUsers_Fail:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url,
        },
      };
    default:
      return state;
  }
}
