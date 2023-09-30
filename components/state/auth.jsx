import {atom} from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    userId: null,
    isLoggedIn: false,
    tutorial: 'basic',
  },
});
