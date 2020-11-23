import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const App = () => {

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path ='/About' component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;