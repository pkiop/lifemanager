import { makeVar } from '@apollo/client';

export const loginUserName = makeVar(localStorage.getItem('loginUserName') && 'nouser');

export default {};
