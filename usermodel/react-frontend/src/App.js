import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import CreatePropertyComponent from './components/CreatePropertyComponent';
import ListUsersComponent from './components/ListUsersComponent';

import CreateUserComponent from './components/CreateUserComponent';
import ListUserPropertyComponent from './components/ListUserPropertyComponent';


import CreateConfigComponent from './components/CreateConfigComponent';
import ListPropertyConfigComponent from './components/ListPropertyConfigComponent';

import MainComponent from './components/MainComponent';


function App() {
  return (
    <div>
        <Router /* basename="/usermodel" */ >
        
              <HeaderComponent />
                <div className="container">
                
                    <Switch> 
                          <Route path = "/" exact component = {MainComponent}></Route>
                          <Route path = "/usermodel" exact component = {MainComponent}></Route>
                          
                          <Route path = "/users" component = {ListUsersComponent}></Route>
                          <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>

                          <Route path = "/list-configurations/" component = {ListPropertyConfigComponent}></Route>
                          <Route path = "/add-config/:id" component = {CreateConfigComponent}></Route>
                          
                          <Route path = "/list-user-property/:id" component = {ListUserPropertyComponent}></Route>
                          <Route path = "/add-property/:id" component = {CreatePropertyComponent}></Route>

                          
                          {/* <Route path = "/update-property/:id" component = {UpdatePropertyComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;