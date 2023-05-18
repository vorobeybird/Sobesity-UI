import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './common';

const Routing = () => {
  const isAuth = false;
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
