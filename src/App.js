import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonsList from './component/persons-list'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FavContacts from './component/fav-contacts'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div className="container">
            <ul className="nav nav-tabs">
              <li className=""><Link to="/" >Contacts</Link></li>
              <li ><Link to="/favcontact" >FavContacts</Link></li>
            </ul>
            <div className="tab-content">
              <div id="home" className="tab-pane fade ">
               
              </div>
              <div id="menu1" className="tab-pane fade in active">
                
                <Route exact path="/" component={PersonsList} />
                <Route path="/favcontact" component={FavContacts} />
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
