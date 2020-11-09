import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fire from '../config/fire'

class SignUp extends Component{
    constructor(props){
    super(props);
    this.signUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        firstName:"",
        lastName: "",
        email:"",
        password: ""
    }
}

    handleChange=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    signUp=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err);
        })
    }
    
    render(){
       return(
           <div className='signup-container'>
           <div className='signup-form'>
              <h1>Create Account</h1>
               <form>
                   <div className='firstname'>
                   <label htmlFor='firstname'>First Name</label>
                   <input type='name' id='firstName' placeholder='Firstname' onChange={this.handleChange} />
                   </div>
                   <div className='lastname'>
                   <label htmlFor='lastname'>Last Name</label>
                   <input type='name' id='lastName' placeholder='Lastname' onChange={this.handleChange} />
                   </div>
                   <div className='email'>
                   <label htmlFor='email'>E-mail</label>
                   <input type='email' id='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
                   </div>
                   <div className='password'>
                   <label htmlFor='password'>Password</label>
                   <input type='password' id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                   </div>
                   <div className='btn'>
                   <button type='submit' onClick={this.signUp}>Create Account</button>
                    <Link to='/' className='cta'>Already have an account?</Link>
                   </div>
               </form>
           </div>
        </div>
       )
    }
}

export default SignUp;