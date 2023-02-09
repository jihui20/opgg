import GlobalStyle from './assets/styles/GlobalStyle';
import Router from './common/RouterConfig';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
    </>
  );
};

export default App;
