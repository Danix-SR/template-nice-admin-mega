import React from 'react';
import './App.css';
import { PublicRoutes, PrivateRoutes } from './setup/routes/Routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { NotFound404 } from './pages/notFound404/NotFound404';
import { Home } from './pages/home/Home';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<NotFound404 />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
