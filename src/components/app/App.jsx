import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ListPage from '../pages/listPage/ListPage';
import DetailPage from '../pages/detailPage/DetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ListPage} />
        <Route exact path='/details/:id' component={DetailPage} />
      </Switch>
    </Router>
  );
}
