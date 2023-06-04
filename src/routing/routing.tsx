import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './common';
import { store } from '@/store';

const Routing = () => {
  const state = store.getState();
  const isAuth = state.auth.isAuthenticated;
  const allLegalRoutes = ROUTES.filter((element) => element.isAuth === isAuth);

  return (
    <Routes>
      {allLegalRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default Routing;
