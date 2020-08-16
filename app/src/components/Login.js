import React from "react";
//import fire from "./config/fire";

class Login extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email" type="text" />
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password" type="text" />
        </div>
        <button style={{ margin: "10px" }} onClick={this.login}>
          Login
        </button>
        <button style={{ margin: "10px" }} onClick={this.signUp}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default Login;
