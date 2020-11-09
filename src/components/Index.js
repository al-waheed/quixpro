import React, { Component } from 'react';
import Home from './Home'
import Login from './Login';
import fire from '../config/fire';
import SignUp from './SignUp';

class Index extends Component {
constructor(props){
    super(props);
    this.state = {
        user:{}
    }
}

componentDidMount(){
    this.authListener();
}
    
   authListener(){
      fire.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({user})
          }else{
              this.setState({user : null})
          }
      })
    }

    render(){
        return(
            <div className='index'>
               {this.state.user ? (<Home/>) : (<Login/>) } 
               {this.state.user ? (<Home/>) : (<SignUp/>)} 
            </div>
        )
    }
}

export default Index;