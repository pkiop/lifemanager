import * as api from 'libs/api';

const SETUSER = 'user/SETUSER';
const LOADUSER = 'user/LOADUSER';
const LOADUSER_SUCCESS = 'user/LOADUSER_SUCCESS';
const LOADUSER_FAILUSER = 'user/LOADUSER_FAILRE';

const GET_ONEUSER = 'user/GET_ONEUSER';
const GET_ONEUSER_SUCCESS = 'user/GET_ONEUSER_SUCCESS';
const GET_ONEUSER_FAILURE = 'user/GET_ONEUSER_FAILURE';

interface User {
  userId: String;
}

interface UserAction {
  type: String,
  user: User,
  payload: any,
}

export const setUser = (userInfo: User) => ({ type: SETUSER, user: userInfo });
export const loadUser = () => async (dispatch: any) => {
  dispatch({ type: LOADUSER });
  try {
    const response = await api.getUsersByAccessToken();
    dispatch({
      type: LOADUSER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: LOADUSER_FAILUSER,
      payload: e,
      error: true,
    });
  }
};
export const getOneUser = (id: number) => async (dispatch: any) => {
  dispatch({ type: GET_ONEUSER });
  try {
    const response = await api.getOneUser(id);
    dispatch({
      type: GET_ONEUSER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ONEUSER_FAILURE,
      payload: e,
      error: true,
    });
  }
};

const initaialState = {
  username: '',
  loading: {
    GET_ONEUSER: false,
  },
  user: null,
};

const user = (state = initaialState, action: UserAction) => {
  switch (action.type) {
  case SETUSER:
    return {
      username: action.user.userId,
    };
  case LOADUSER:
    return {
      username: action,
    };
  case LOADUSER_SUCCESS:
    return {
      ...state,
      username: action,
    };

  case LOADUSER_FAILUSER:
    return {
      ...state,
      error: true,
    };

  case GET_ONEUSER:
    return {
      ...state,
      loading: {
        ...state.loading,
        GET_ONEUSER: true,
      },
    };
  case GET_ONEUSER_SUCCESS:
    return {
      ...state,
      loading: {
        ...state.loading,
        GET_ONEUSER: false,
      },
      user: action.payload,
    };
  case GET_ONEUSER_FAILURE:
    return {
      ...state,
      loading: {
        ...state.loading,
        GET_ONEUSER: false,
      },
    };

  default:
    return state;
  }
};

export default user;
