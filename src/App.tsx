import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from "./component/Home";
import { Addemployee } from "./component/AddEmployee";
import { Editemployee } from "./component/EditEmployee";
import { WidgetProvider } from './context/ConfigureWidgetState';

import { GlobalProvider } from './context/GlobalState';


let HomeApp = () => {
  return (
      <WidgetProvider>
        <Home />
      </WidgetProvider>
    )
}

export default () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" component={HomeApp} exact />
          <Route path="/add" component={Addemployee} exact />
          <Route path="/edit/:id" component={Editemployee} exact />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}
