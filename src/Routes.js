import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import Countries from './Countries';
import CountryDetails from './CountryDetails';

export default function Routes() {
  const history = createHistory({
    basename: process.env.PUBLIC_URL
  });

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
    </BrowserRouter>
  );
}