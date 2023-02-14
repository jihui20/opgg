import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Main from '../pages/Main';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/summoner" />} />
      <Route path="/summoner/*" element={<Main />} />
    </Routes>
  );
};

export default RouterConfig;
