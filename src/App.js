
import './App.css';
import React from "react";

import UserRegistration from './components/UserRegistration';
import Home from "./components/Home"
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ReactNavbar from "./components/ReactNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
     <BrowserRouter /*style={{justifyContent: "center",alignItems: "center"}}*/>
        <ReactNavbar/>
        
            <Switch>
              <Route path='/register' component={UserRegistration}  />
              <Route path='/login' component={UserLogin}  />
              
              <Route path='/'  component={Home}/> {/* Right after log in, user will go here, all following paths will be buttons on the home screen  */}
            </Switch>
            
          </BrowserRouter>
    </div>
  );
}

export default App;
