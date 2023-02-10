import { atom } from 'recoil';

const DEFAULT_VALUE = '';

const currentSearchState = atom({
  key: 'currentSearchState',
  default: DEFAULT_VALUE,
});

export { currentSearchState };
