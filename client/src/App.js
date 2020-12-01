import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/authentication/AuthState';
import Register from './Register';
import Login from './Login';


const App = () => {

  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path ='/' component={Home} />
                <Route exact path ='/About' component={About} />
                <Route exact path ='/Register' component={Register} />
                <Route exact path ='/Login' component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;