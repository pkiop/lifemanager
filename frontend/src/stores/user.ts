import { action, observable, makeObservable } from 'mobx';

export interface UserInfo {
  username: string,
}

class UserStore {
  data = {
    username: 'noUser',
  };

  constructor() {
    makeObservable(this, {
      data: observable,
      logIn: action,
    });
  }

  logIn(data: UserInfo) {
    this.data = data;
  }
}

export const userStore = new UserStore();
export default {};
