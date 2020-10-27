import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TheseCharacters from '../../containers/TheseCharacters';
import ThisCharacter from '../../containers/ThisCharacter';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TheseCharacters} />
        <Route exact path="/Detail/:id" component={ThisCharacter} />
      </Switch>
    </Router>
  );
}
