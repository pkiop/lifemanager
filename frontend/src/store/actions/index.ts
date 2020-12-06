import { CALL_API, Schemas } from '../middleware/api';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchUser = (login: any) => ({
  [CALL_API]: {
    types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
    endpoint: `users/${login}`,
    schema: Schemas.USER,
  },
});

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {
  const user = getState().entities.users[login];
  if (user && requiredFields.every((key) => user.hasOwnProperty(key))) {
    return null;
  }

  return dispatch(fetchUser(login));
};

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE,
});
