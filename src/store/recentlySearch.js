import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const DEFAULT_VALUE = [];

const recentlySearchState = atom({
  key: 'recentlySearchState',
  default: DEFAULT_VALUE,
  effects_UNSTABLE: [persistAtom],
});

export { recentlySearchState };
