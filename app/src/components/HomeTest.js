import React from "react";
import fire from "./config/fire";

class HomeTest extends React.Component {
  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h3>You are logged in! Head Over To Messaging!</h3>
        <button
          style={{
            margin: "10px",
            background: "#5d8ffc",
            color: "#fff",
            border: "1px solid #5d8ffc",
            borderRadius: "5px",
            padding: "15px",
          }}
          onClick={this.logout}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default HomeTest;
