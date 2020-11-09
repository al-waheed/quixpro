import React, { Component } from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter , Route } from 'react-router-dom'

export class App extends Component {
    render() {
        return (
            <div>
              <BrowserRouter>
                <Route path='/' exact component={Login} />
                <Route path='/SignUp' component={SignUp} />
              </BrowserRouter>
         </div>
        )
    }
}

export default App