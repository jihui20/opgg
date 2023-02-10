import { RecoilRoot } from 'recoil';
import GlobalStyle from './assets/styles/GlobalStyle';
import Router from './common/RouterConfig';
import Header from './components/Header';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Router />
    </RecoilRoot>
  );
};

export default App;
