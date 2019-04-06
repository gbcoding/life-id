import React, { Component } from 'react';
import { View } from 'react-native';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './containers/login/Login';
import SignUp from './containers/sign_up/SignUp';
import Home from './containers/home/Home';

import './App.css';

// Routes go here
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={Login}/> 
    </Switch>
  </main>
)

const Header = () => (
  <header style={{textAlign: "left", paddingLeft: 15}}>
    <h1>Live Life</h1>
  </header>
)

class App extends Component {
  constructor(props){
    super(props);
    

  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <View style={{ height: '100%', flexDirection: 'column', alignSelf: 'stretch'}}>
          <div>
              <Main /> 
           </div>   
          </View>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
