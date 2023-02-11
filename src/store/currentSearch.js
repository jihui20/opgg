import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const DEFAULT_VALUE = '';

const currentSearchState = atom({
  key: 'currentSearchState',
  default: DEFAULT_VALUE,
  effects_UNSTABLE: [persistAtom],
});

export { currentSearchState };
