import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from "./components/FormInput";
import Selector from "./components/MajorSelector";
import SelectMult from "./components/SelectMult";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

import { Home } from "./Home";
import { About } from "./About";
import { ChatBox } from "./ChatBox";
import { Submission } from "./Submission";
import { Matches } from "./Matches";
import Sidebar from "./components/Sidebar";

import fire from "./components/config/fire";
import Login from "./components/Login";
import HomeTest from "./components/HomeTest";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
    fetch("http://127.0.0.1:5000/api/v1/getUser?email=nsc5081@uw.edu")
      .then((response) => response.json())
      .then((data) => {
        console.log("This is working");
        console.log(data);
      })
      .catch(console.error);
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />

          <Sidebar />

          <Switch>
            <Route
              exact
              path="/"
              component={this.state.user ? HomeTest : Login}
            />
            <Route path="/about" component={About} />
            <Route path="/chat" component={this.state.user ? ChatBox : Login} />
            <Route component={Submission} />
            <Route path="/Matches"component={Matches} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

// async function getData(url = "http://127.0.0.1:5000/api/v1/getUser?email=sathvikchinta@gmail.com") {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'no-cors', // no-cors, *cors, same-origin
//     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     // credentials: 'same-origin', // include, *same-origin, omit
//     // headers: {
//     //   'Content-Type': 'application/json'
//     //   // 'Content-Type': 'application/x-www-form-urlencoded',
//     // },
//     // redirect: 'follow', // manual, *follow, error
//     // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     // body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   checkStatus(response);
//   try {
//     return response.json(); // parses JSON response into native JavaScript objects
//   } catch(err) {
//     console.error(err);
//   }
// }


export default App;

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import FormInput from "./components/FormInput";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from "./components/NavigationBar";

// import { Home } from "./Home";
// import { About } from "./About";
// import { Submission } from "./Submission";
// import Sidebar from "./components/Sidebar";

// import fire from "./components/config/fire";
// import Login from "./components/Login";
// import HomeTest from "./components/HomeTest";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//     };
//     this.authListener = this.authListener.bind(this);
//   }
//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     fire.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ user });
//       } else {
//         this.setState({ user: null });
//       }
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Router>
//           <NavigationBar />

//           <Sidebar />

//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route component={Submission} />
//           </Switch>
//         </Router>
//         {this.state.user ? <HomeTest /> : <Login />}
//       </React.Fragment>
//     );
//   }
// }

// export default App;