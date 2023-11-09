import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "../config/fire";
require('firebase/auth')

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  
  login = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(
        this.state.email, 
        this.state.password
        )
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <h1>Enter your account</h1>
          <form>
            <div className="email">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                placeholder="E-mail"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="btn">
              <button type="submit" onClick={this.login}>
                Login
              </button>
              <Link to="/SignUp" className="cta">
                Create New account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
