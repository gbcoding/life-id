import React, { Component } from 'react';
import { View } from 'react-native';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './containers/login/Login';
import SignUp from './containers/sign_up/SignUp';
import Scan from './containers/scan/Scan';
import Edit from './containers/edit/Edit';
import Directory from './containers/directory/Directory';

import logo from './Logo.jpg';
import './App.css';

// Routes go here
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={Login}/> 
      <Route path='/scan/:uuid' component={Scan}/>
      <Route path='/edit/:uuid' component={Edit}/>
      <Route exact path='/directory' component={Directory} />
    </Switch>
  </main>
)

const Header = () => (
  <header style={{ paddingLeft: 15, justifyContent: "center" }}> 
    <img src={logo} style={{width: "300px", height: "300px"}}></img>
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
        <Header />
          <div className="mainContent">

              
              <Main /> 
           </div>   
          </View>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
