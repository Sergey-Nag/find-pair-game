import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Modal from './components/Modal/Modal';
import Gamepage from './pages/Gamepage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Modal isPause />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/game">
            <Gamepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
