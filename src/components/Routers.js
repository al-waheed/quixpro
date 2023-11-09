import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
// import SignIn from './Login';
// import SignUp from './SignUp';

class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/SignUp' component={SignUp} /> */}
          {/* <Route path='/home'   component={Home} /> */}
        </Switch>
      </div>
    )
  }
}

export default Routers;