import * as api from 'libs/api';

const TIMERECODE = 'timeRecode/TIMERECODE';
const TIMERECODE_SUCCESS = 'timeRecode/TIMERECODE_SUCCESS';
const TIMERECODE_FAILUSER = 'timeRecode/TIMERECODE_FAILRE';

export interface ITimeRecode {
  userId?: string;
  title?: string;
  startTime? : Array<number>;
  endTime?: Array<number>;
  category?: string;
  isActivate?: boolean;
}

interface TimeRecodeAction {
  type: string,
  payload: any,
}

// export const setUser = (userInfo: User) => ({ type: SETUSER, user: userInfo });
export const loadTimeRecode = () => async (dispatch: any) => {
  dispatch({ type: TIMERECODE });
  try {
    const response = await api.getTimeRecode();
    dispatch({
      type: TIMERECODE_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: TIMERECODE_FAILUSER,
      payload: e,
      error: true,
    });
  }
};

const initaialState = {
  timeRecodeList: <any>[],
  timeRecodeInput: {
    userId: 'test',
    title: 'test',
    startTime: [10, 0],
    endTime: [13, 0],
    category: 'hello',
    isActive: true,
  },
};

const timeRecode = (state = initaialState, action: TimeRecodeAction) => {
  switch (action.type) {
  case TIMERECODE:
    return {
      payload: action,
    };
  case TIMERECODE_SUCCESS:
    return {
      ...state,
      payload: action,
    };

  case TIMERECODE_FAILUSER:
    return {
      ...state,
      error: true,
    };

  default:
    return state;
  }
};

export default timeRecode;
