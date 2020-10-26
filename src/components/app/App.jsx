import React from 'react';
import {
  BrowserRouter as BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

const List = () => {
  return <h1>Character List</h1>
}

const Detail = () => {
  return <h1>Character</h1>
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/Detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
