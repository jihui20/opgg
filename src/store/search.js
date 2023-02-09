import { atom } from 'recoil';

const DEFAULT_VALUE = {
  value: '',
};

const searchState = atom({
  key: 'searchState',
  default: DEFAULT_VALUE,
});

export { searchState };
