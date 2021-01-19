import { makeVar } from '@apollo/client';

export const userVar = makeVar({ username: '', selectedDate: new Date().toISOString().split('T')[0] });
export default {};
