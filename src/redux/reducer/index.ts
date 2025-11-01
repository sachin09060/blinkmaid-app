import type { AnyAction } from "redux";
import { UPDATE_AUTH_DATA, CLEAR_AUTH, UPDATE_USER_INFO } from "../action";
import type { InitialReduxStateProps } from "../redux.props";

const initialState: InitialReduxStateProps = {
  tokenInfo: {
    accessToken: "",
    refreshToken: "",
  },
    userInfo: null, 

};

export default function authReducer(
  state = initialState,
  action: AnyAction
): InitialReduxStateProps {
  switch (action.type) {
    case UPDATE_AUTH_DATA:
      return {
        ...state,
        tokenInfo: {
          accessToken: action.payload.access,
          refreshToken: action.payload.refresh,
        },
      };
  case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    case CLEAR_AUTH:
      return initialState;

    default:
      return state;
  }
}
