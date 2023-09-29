import {atom} from 'recoil';

export const filterState = atom({
  key: 'filterState',
  default: {
    android: false,
    small: false,
    removable: false,
    sticker: false,
    sheet: false,
    wordmark: false,
    crew: false,
    grey: false,
    youtube: false,
    icon: false,
    pullover: false,
    black: false,
  },
});
