import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/summoner/*" element={<Main />} />
    </Routes>
  );
};

export default RouterConfig;
