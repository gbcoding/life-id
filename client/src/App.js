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
      <Route exact path='/home' component={Home}/>  
    </Switch>
  </main>
)


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    //  serverMessage: "",
      items: [],
      isLoaded: false,
    }

  }


  render() {
    return (
      <div className="App">
        <header>

        </header>

        <View>
            <div> 
              This is a render test.
            </div>

          
          
          </View>
      </div>
    );
  }
}

export default App;
