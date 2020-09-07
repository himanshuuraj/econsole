import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Home } from "./component/Home";
import { Addemployee } from "./component/AddEmployee";
import { Editemployee } from "./component/EditEmployee";

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={Addemployee} exact />
          <Route path="/edit/:id" component={Editemployee} exact />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
