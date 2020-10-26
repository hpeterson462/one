import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TheseCharacters from '../../containers/TheseCharacters';

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
        <Route exact path="/" component={TheseCharacters} />
        <Route exact path="/Detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}
