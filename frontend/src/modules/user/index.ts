import * as api from 'libs/api';

const SETUSER = 'user/SETUSER';
const LOADUSER = 'user/LOADUSER';

const GET_ONEUSER = 'user/GET_ONEUSER';
const GET_ONEUSER_SUCCESS = 'user/GET_ONEUSER_SUCCESS';
const GET_ONEUSER_FAILURE = 'user/GET_ONEUSER_FAILURE';

// const GET_USERS = 'sample/GET_USERS';
// const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

interface User {
  name: String;
}

interface UserAction {
  type: String,
  user: User,
  payload: any,
}

export const setUser = (userInfo: User) => ({ type: SETUSER, user: userInfo });
export const loadUser = () => ({ type: LOADUSER });
export const getOneUser = (id: number) => async (dispatch: any) => {
  console.log('getOneUser : ', id);
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
      username: action.user.name,
    };
  case LOADUSER:
    return {
      username: action,
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
