import React from "react";
import fire from "./config/fire";

class HomeTest extends React.Component {
  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>You are logged in! Head Over To Messaging!</h3>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default HomeTest;
