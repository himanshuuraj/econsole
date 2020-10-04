import React from 'react';
import {useRoutes} from 'hookrouter';
import './App.css';
import { Home } from "./container/home/Home";
import { WidgetProvider } from './context/ConfigureWidgetState';
import { GlobalProvider } from './context/GlobalState';
import { Login } from "./container/login/login";
import 'antd/dist/antd.css';
// import { useRedirect} from 'hookrouter';

let HomeApp = () => {
  return (
      <WidgetProvider>
        <Home />
      </WidgetProvider>
    )
}

const routes = {
  "/": () => <HomeApp />,
  "/login": () => <Login />,
};

export default () => {

  // useRedirect('/', '/login');

  return (
    <GlobalProvider>
      {useRoutes(routes)}
    </GlobalProvider>
  );
}
