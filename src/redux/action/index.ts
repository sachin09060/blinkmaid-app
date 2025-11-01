export const UPDATE_AUTH_DATA = "UPDATE_AUTH_DATA";
export const CLEAR_AUTH = "CLEAR_AUTH";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export const update_auth_data = (payload: {
  access: string;
  refresh: string;
}) => ({
  type: UPDATE_AUTH_DATA,
  payload,
});

export const clear_auth = () => ({
  type: CLEAR_AUTH,
});

export const update_user_info = (payload: any) => ({
  type: UPDATE_USER_INFO,
  payload,
});