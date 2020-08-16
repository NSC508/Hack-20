import React from "react";
import fire from "./config/fire";

class Login extends React.Component {
  signUp() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Signed Up");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  }

  login() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged In");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <div>Email</div>
          <input
            id="email"
            placeholder="Enter Email"
            type="text"
            style={{
              border: "1px solid #ccc",
              solid: "#ccc",
              borderRadius: "5px",
              background: "#fff",
              padding: "15px",
              outline: "none",
            }}
          />
        </div>
        <div>
          <div>Password</div>
          <input
            id="password"
            placeholder="Enter Password"
            type="text"
            style={{
              border: "1px solid #ccc",
              solid: "#ccc",
              borderRadius: "5px",
              background: "#fff",
              padding: "15px",
              outline: "none",
            }}
          />
        </div>
        <button
          style={{
            margin: "10px",
            background: "#5d8ffc",
            color: "#fff",
            border: "1px solid #5d8ffc",
            borderRadius: "5px",
            padding: "15px",
          }}
          onClick={this.login}
        >
          Login
        </button>
        <button
          style={{
            margin: "10px",
            background: "#5d8ffc",
            color: "#fff",
            border: "1px solid #5d8ffc",
            borderRadius: "5px",
            padding: "15px",
          }}
          onClick={this.signUp}
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default Login;
