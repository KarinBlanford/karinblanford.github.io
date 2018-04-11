import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Component1 from './components/component-1';
import Component2 from './components/component-2';
import Component3 from './components/component-3';
import Component4 from './components/component-4';
import Component5 from './components/component-5';
import './App.css';

class App extends Component {

  setActive = (e) => {
    console.log(e)
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
            <nav className="navbar navbar-light bg-dark">
              <a id="client-name" className="navbar-brand" href="#">One Plus Tax</a>
              <div className="dropdown form-inline">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select Component
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li className="dropdown-item"><Link className="nav-link" to="/" onClick={this.setActive.bind(this, 'component-1')}>Component-1</Link></li>
                  <li className="dropdown-item"><Link className="nav-link" to="/component-2">Component-2</Link></li>
                  <li className="dropdown-item"><Link className="nav-link" to="/component-3">Component-3</Link></li>
                  <li className="dropdown-item"><Link className="nav-link" to="/component-4">Component-4</Link></li>
                  <li className="dropdown-item"><Link className="nav-link" to="/component-5">Component-5</Link></li>
                </div>
              </div>
            </nav>
            <div className="row">
              <Route exact path="/" component={Component1}/>
              <Route path="/component-2" component={Component2}/>
              <Route path="/component-3" component={Component3}/>
              <Route path="/component-4" component={Component4}/>
              <Route path="/component-5" component={Component5}/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
