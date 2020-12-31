import * as api from 'libs/api';

const SETTIMERECODE = 'timeRecode/SETTIMERECODE';
const SETTIMERECODE_SUCCESS = 'timeRecode/SETTIMERECODE_SUCCESS';
const SETTIMERECODE_FAILURE = 'timeRecode/SETTIMERECODE_FAILURE';

const LOADTIMERECODE = 'timeRecode/LOADTIMERECODE';
const LOADTIMERECODE_SUCCESS = 'timeRecode/LOADTIMERECODE_SUCCESS';
const LOADTIMERECODE_FAILUSER = 'timeRecode/LOADTIMERECODE_FAILRE';

export interface ITimeRecode {
  userId?: string;
  title?: string;
  startTime?: Array<number>;
  endTime?: Array<number>;
  category?: string;
  isActivate?: boolean;
}

export const setTimeRecode = (recode: any) => async (dispatch: any) => {
  dispatch({ type: SETTIMERECODE, recode });
  try {
    const res = await api.postTimeRecode(recode);
    dispatch({
      type: SETTIMERECODE_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: SETTIMERECODE_FAILURE,
      payload: e,
      error: true,
    });
  }
};

export const loadTimeRecode = () => async (dispatch: any) => {
  dispatch({ type: LOADTIMERECODE });
  try {
    const response = await api.getTimeRecode();
    dispatch({
      type: LOADTIMERECODE_SUCCESS,
      timeRecodeList: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: LOADTIMERECODE_FAILUSER,
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

const timeRecode = (state = initaialState, action: any) => {
  switch (action.type) {
  case SETTIMERECODE: {
    return {
      ...state,
      timeRecodeInput: { ...action.recode },
    };
  }
  case SETTIMERECODE_SUCCESS: {
    return {
      ...state,
    };
  }
  case SETTIMERECODE_FAILURE: {
    return {
      ...state,
    };
  }
  case LOADTIMERECODE:
    return {
      ...state,
      payload: action,
    };
  case LOADTIMERECODE_SUCCESS:
    return {
      ...state,
      timeRecodeList: [...action.timeRecodeList],
    };

  case LOADTIMERECODE_FAILUSER:
    return {
      ...state,
      error: true,
    };

  default:
    return state;
  }
};

export default timeRecode;
