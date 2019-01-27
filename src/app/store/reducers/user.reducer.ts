import {User} from 'src/app/models/user.model';
import * as fromUser from '../actions/user.action';

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

export function UserReducer(state = initialState, action: fromUser.UserActions): UserState {
  switch (action.type) {
    case fromUser.UserActionType.LoadUser:
      return {...state, loading: true, error: null};
    case fromUser.UserActionType.LoadUser_Success:
      return {...state, loaded: true, loading: false, user: {...action.user}};
    case fromUser.UserActionType.LoadUser_Fail:
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
